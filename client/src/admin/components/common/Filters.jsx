import Dropdown from "./Dropdown";
import InputField from "./InputField";
import Search from "../svgs/Search";
import Button from "./Button";
import React, {useEffect, useState} from "react";
import {useAppContext} from "@/AppContext.jsx";
import {DateRangePicker} from "rsuite";
import 'rsuite/DateRangePicker/styles/index.css';
import moment from "moment";
import {useNavigate, useSearchParams} from "react-router-dom";

const purposeOptions = [{id: -1, name: 'All'}, {id: 0, name: "Sale"}, {id: 1, name: "Rent"}];
const categoryOptions = [{id: -1, name: 'All'}, {id: 0, name: 'Property'}, {id: 1, name: 'Project'}]
const propertyStatusOptions = [{id: -1, name: 'All'}, {id: 0, name: "Pending"}, {id: 1, name: "Accepted"}, {id: 2, name: "Rejected"}];

const Filters = ({ type, totalRecords }) => {
    const {locations, developers, propertyTypes} = useAppContext();
    const [dateRange, setDateRange] = useState([]);
    const [selectedPurpose, setSelectedPurpose] = useState(undefined);
    const [selectedCategory, setSelectedCategory] = useState(undefined);
    const [selectedLocation, setSelectedLocation] = useState(undefined);
    const [selectedPropertyType, setSelectedPropertyType] = useState(undefined);
    const [selectedDeveloper, setSelectedDeveloper] = useState(undefined);
    const [selectedStatus, setSelectedStatus] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");
    const [canClear, setCanClear] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(dateRange.length > 0 || selectedDeveloper || selectedLocation || selectedPurpose !== undefined || selectedCategory !== undefined || searchTerm || selectedPropertyType || selectedStatus !== undefined) {
            setCanClear(true);
        } else {
            setCanClear(false);
        }
    }, [dateRange, selectedDeveloper, selectedLocation, selectedPurpose, selectedCategory, searchTerm, selectedPropertyType, selectedStatus]);

    useEffect(() => {
        if(searchParams) {
            const params = getSearchParams();
            if(params.from && params.to) {
                setDateRange([params.from, params.to]);
            }
            setSelectedPurpose(params.purpose);
            setSelectedLocation(params.location);
            setSelectedCategory(params.category);
            setSelectedDeveloper(params.developer);
            setSearchTerm(params.text);
            setSelectedPropertyType(params.type)
            setSelectedStatus(params.status)
        }
    }, [searchParams])

    const getSearchParams = () => {
        const params = {};

        const from = searchParams.get('from')
        if(from) {
            params.from = moment(from, "MM/DD/YYYY").toDate();
        }

        const to = searchParams.get('to')
        if(to) {
            params.to = moment(to, "MM/DD/YYYY").toDate();
        }

        const purpose = searchParams.get('purpose');
        if(purpose) {
            const purposeId = parseInt(purpose);
            params.purpose = purposeOptions.filter(p => p.id === purposeId)[0];
        }

        const category = searchParams.get('category');
        if(category) {
            const categoryId = parseInt(category);
            params.category = categoryOptions.filter(c => c.id === categoryId)[0];
        }

        const location = searchParams.get('location');
        if(location) {
            const locationId = parseInt(location);
            params.location = locations.filter(l => l.id === locationId)[0];
        }

        const developer = searchParams.get('developer');
        if(developer) {
            const developerId = parseInt(developer);
            params.developer = developers.filter(d => d.id === developerId)[0];
        }

        const propertyType = searchParams.get('type');
        if(propertyType) {
            const propertyTypeId = parseInt(propertyType);
            params.type = propertyTypes.filter(p => p.id === propertyTypeId)[0];
        }

        const status = searchParams.get('status');
        if(status) {
            const statusId = parseInt(status);
            params.status = propertyStatusOptions.filter(p => p.id === statusId)[0];
        }

        const text = searchParams.get('text');
        if(text) {
            params.text = text;
        }

        return params;
    }

    const handleSearch = () => {
        const params = {
            page: 1,
        };

        if(dateRange.length > 0) {
            params.from = moment(dateRange[0]).format("MM/DD/YYYY");
            params.to = moment(dateRange[1]).format("MM/DD/YYYY");
        }

        if(selectedPurpose && selectedPurpose.id > -1) {
            params.purpose = selectedPurpose.id;
        }

        if(selectedCategory && selectedCategory.id > -1) {
            params.category = selectedCategory.id;
        }

        if(selectedLocation) {
            params.location = selectedLocation.id;
        }

        if(selectedDeveloper) {
            params.developer = selectedDeveloper.id;
        }

        if(searchTerm) {
            params.text = searchTerm;
        }

        if(selectedStatus && selectedStatus.id > -1) {
            params.status = selectedStatus.id;
        }

        if(selectedPropertyType) {
            params.type = selectedPropertyType.id;
        }

        const searchParams = new URLSearchParams(params).toString();
        if(type === 'requests') {
            navigate(`/admin/submitted-requests?${searchParams}`)
        } else {
            navigate(`/admin/manage-properties?${searchParams}`)
        }
        navigate(0)
    }

    const onClear = () => {
        if(type === 'requests') {
            navigate('/admin/submitted-requests?page=1');
        } else {
            navigate('/admin/manage-properties?page=1');
        }
        navigate(0)
    }

    return (
        <div className="flex items-center justify-between">
          <h2 className="w-[20%] text-[20px] font-semibold">
            Showing Results <span className="text-[16px] font-light">({totalRecords})</span>
          </h2>
          <div className="flex w-[85%] items-center justify-end gap-2 flex-wrap">
            <div
              className={`relative flex min-w-[150px] items-center ${type === "properties" ? "w-[30%]" : "w-[46%]"}`}
            >
              <InputField
                type="string"
                id="string"
                placeholder="Search Property ..."
                className="border border-mist ps-9 md:ps-5 lg:ps-[22px] xl:ps-8 2xl:ps-10"
                onChange={e => setSearchTerm(e.currentTarget.value)}
                value={searchTerm}
              />
              <Search className="absolute left-2 top-[13px] text-grey md:left-1.5 xl:left-[9px] 2xl:left-3" />
            </div>

            {type === "properties" ? (
              <>
                <DateRangePicker format='MM/dd/yyyy' value={dateRange} placeholder='Select date range' size='lg' onChange={value => setDateRange(value)} />
                <Dropdown placeholder={'Purpose'} options={purposeOptions} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                    onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                    currentOption={selectedPurpose} onOptionChange={option => setSelectedPurpose(option)}
                />
                <Dropdown placeholder={'Category'} options={categoryOptions} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                            onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                            currentOption={selectedCategory} onOptionChange={option => setSelectedCategory(option)}
                />
                <Dropdown placeholder={'Location'} options={locations} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                            onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                            currentOption={selectedLocation} onOptionChange={option => setSelectedLocation(option)}
                />
                <Dropdown placeholder={'Developer'} options={developers} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                            onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                            currentOption={selectedDeveloper} onOptionChange={option => setSelectedDeveloper(option)}
                />
              </>
            ) : (
                <>
                    <DateRangePicker format='MM/dd/yyyy' value={dateRange} placeholder='Select date range' size='lg' onChange={value => setDateRange(value)} />
                    <Dropdown placeholder={'Purpose'} options={purposeOptions} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                              onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                              currentOption={selectedPurpose} onOptionChange={option => setSelectedPurpose(option)}
                    />
                    <Dropdown placeholder={'Location'} options={locations} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                              onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                              currentOption={selectedLocation} onOptionChange={option => setSelectedLocation(option)}
                    />
                    <Dropdown placeholder={'Property Type'} options={propertyTypes} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                              onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                              currentOption={selectedPropertyType} onOptionChange={option => setSelectedPropertyType(option)}
                    />
                    <Dropdown placeholder={'Status'} options={propertyStatusOptions} onItemFilter={(option, search) => option.name.toLowerCase().includes(search.toLowerCase())}
                              onSelectedOptionRender={(option) => option.name} onOptionRender={option => option.name} onOptionCompare={(op1, op2) => op1.id === op2.id}
                              currentOption={selectedStatus} onOptionChange={option => setSelectedStatus(option)}
                    />
                </>
            )}
            <Button variant="filled" className="rounded-lg" onClick={handleSearch}>
              Search
            </Button>
            {
                canClear ?
                  <Button variant="filled" className="rounded-lg" onClick={onClear}>
                      Clear
                  </Button> : <></>
            }
          </div>
        </div>
    );
};

export default Filters;
