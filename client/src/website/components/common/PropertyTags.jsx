import Tag from "@/website/components/common/Tag.jsx";
import FeaturedIcon from "@/website/components/common/FeaturedIcon.jsx";

const PropertyTags = ({property, details}) => {

    if(!property) {
        return <></>
    }

    return (
        <div className='flex items-center gap-x-2'>
            {
                details && property.category === 1 ?
                    <Tag color={'purple'} text={property.status}>
                    </Tag> : <></>
            }
            {
                property.featured && !details ?
                    <Tag textColor={'white'} color={'#EB6753'}>
                        <FeaturedIcon className={'h-[20px] md:h-[16px] lg:h-[18px] xl:h-[19px] 2xl:h-[20px]'} /> FEATURED
                    </Tag>: <></>
            }
            {
                details ?
                    <Tag color={property.purpose === 0 ? '#1ECA8C' : '#1560bd'}>
                        {property.purpose === 0 ? 'Buy' : 'Rent'}
                    </Tag> :
                    <Tag color={property.purpose === 0 ? '#1ECA8C' : '#1560bd'} textColor={'white'}>
                        {property.purpose === 0 ? 'Buy' : 'Rent'}
                    </Tag>
            }
        </div>
    )
}

export default PropertyTags