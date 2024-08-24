import {useEffect, useRef, useState} from "react";

const PaymentPlanItemFrame = ({className, value, inverted, isMobile}) => {
    const svgRef = useRef();
    const [centerY, setCenterY] = useState(50);
    const [centerX, setCenterX] = useState(50);

    useEffect(() => {
        if((inverted && svgRef.current) || (isMobile && svgRef.current)) {
            const boundingBox = svgRef.current.getBoundingClientRect();
            if(isMobile) {
                if(inverted) {
                    setCenterY(boundingBox.height / 2 + 10);
                    setCenterX(boundingBox.width / 2 - 2.5);
                } else {
                    setCenterY(boundingBox.height / 2 + 5);
                    setCenterX(boundingBox.width / 2 - 2.5);
                }
            } else {
                setCenterY(boundingBox.height / 2 + 2);
                setCenterX(boundingBox.width / 2 - 5);
            }
        }
    }, [inverted]);

    return (
        <svg viewBox="0 0 90 105" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={className} ref={svgRef}>
            <g transform={isMobile ? (inverted ? `rotate(90 ${centerX} ${centerY})` : `rotate(-90 ${centerX} ${centerY})`) : (inverted ? `rotate(180 ${centerX} ${centerY})` : '')}>
                <path
                    d="M44.2842 103.766L27.2561 86.3125C26.5696 85.6089 27.2041 84.4408 28.168 84.6336L45 88L61.832 84.6336C62.796 84.4408 63.4304 85.6089 62.7439 86.3125L45.7158 103.766C45.3234 104.169 44.6766 104.169 44.2842 103.766Z"
                    fill="#EB6753" stroke="#EB6753"/>

                <path
                    d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM3.84626 45C3.84626 67.7286 22.2714 86.1537 45 86.1537C67.7286 86.1537 86.1537 67.7286 86.1537 45C86.1537 22.2714 67.7286 3.84626 45 3.84626C22.2714 3.84626 3.84626 22.2714 3.84626 45Z"
                    fill="#EB6753"/>
            </g>
            <text textAnchor="middle" x={isMobile ? (inverted ? '60%' : '40%') : '50%'} y={isMobile ? (inverted ? '65%' : '55%') : (inverted ? '67%' : '55%')} fill='black'
                  className='font-bold text-mirage text-3xl md:text-3xl'>{value}</text>
        </svg>

    )
}

export default PaymentPlanItemFrame;