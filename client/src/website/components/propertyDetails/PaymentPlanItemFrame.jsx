const PaymentPlanItemFrame = ({className, value, inverted, isMobile}) => {

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <p className='font-bold text-mirage relative z-10 text-2xl md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>{value}</p>
            <svg viewBox="0 0 90 105" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`absolute h-full w-full top-1/2 left-1/2 ${inverted ? 
                    `${isMobile ? "rotate-90 -translate-y-1/2 -translate-x-[60%]" : "rotate-180 -translate-y-[60%] -translate-x-1/2"}` : 
                    `${isMobile ? "-translate-y-1/2 -translate-x-[40%] -rotate-90" : "-translate-y-[40%] -translate-x-1/2"}`}`}>	
                <g>
                    <path
                        d="M44.2842 103.766L27.2561 86.3125C26.5696 85.6089 27.2041 84.4408 28.168 84.6336L45 88L61.832 84.6336C62.796 84.4408 63.4304 85.6089 62.7439 86.3125L45.7158 103.766C45.3234 104.169 44.6766 104.169 44.2842 103.766Z"
                        fill="#EB6753" stroke="#EB6753"/>

                    <path
                        d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM3.84626 45C3.84626 67.7286 22.2714 86.1537 45 86.1537C67.7286 86.1537 86.1537 67.7286 86.1537 45C86.1537 22.2714 67.7286 3.84626 45 3.84626C22.2714 3.84626 3.84626 22.2714 3.84626 45Z"
                        fill="#EB6753"/>
                </g>
            </svg>
        </div>
    )
}

export default PaymentPlanItemFrame;