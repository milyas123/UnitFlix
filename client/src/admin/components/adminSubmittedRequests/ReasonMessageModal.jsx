import React, { useState, useEffect } from "react";
import Cross from "../svgs/Cross.jsx"
import Button from "@/admin/components/common/Button.jsx";

const ReasonMessageModal = ({ onClose, onSubmit, loadingAction }) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setMessage(value)
    };

    const handleSubmit = () => {
        onSubmit(message);
        setMessage('');
    };

    const onCloseClick = () => {
        if(onClose) {
            onClose();
        }
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="flex w-[40rem] flex-col gap-y-3 rounded-3xl bg-white">
                    <div className="border-b border-pastelGrey">
                        <div className="flex items-center justify-between px-5 pb-3 pt-5">
                            <div className="flex items-center gap-x-2.5">
                                <h1 className="font-regular text-[22px]">Reject Property Request</h1>
                            </div>
                            <div onClick={onCloseClick}>
                                <Cross className="cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-pastelGrey">
                        <div className="px-5 pb-9 flex flex-col gap-y-1">
                            <label>Reason for Rejection</label>
                            <textarea className='h-[300px] w-[100%] text-[16px] p-3 md:text-[12px] xl:text-[14px] md:px-2 md:py-2.5 xl:p-3 2xl:text-[16px] 2xl:px-4 appearance-none border border-gray rounded-md text-black leading-tight focus:outline-none focus:shadow-outline focus:border-gray-400 font-regular'
                                      value={message} onChange={handleInputChange} placeholder='This is rejected because...' />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-x-3 px-5 pb-4 pt-2">
                        <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage" onClick={onCloseClick}>
                            Cancel
                        </Button>
                        <Button className={`rounded-md ${
                            loadingAction?.type === 2 &&
                            "cursor-not-allowed opacity-50"
                        }`} onClick={handleSubmit}
                                variant={loadingAction.type === 2 ? 'disabled' : 'filled'}>
                            {
                                loadingAction.type === 2 ?
                                    'Submitting...' : 'Submit'
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasonMessageModal;
