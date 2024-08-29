const Tag = ({color, text, children, textColor}) => {
    return (
        <div className={`rounded-sm flex items-center gap-x-1 text-[16px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-nowrap relative overflow-hidden`} style={{color: textColor ? textColor : color}}>
            <div className='absolute size-full' style={{backgroundColor: color, opacity: textColor ? 1 : 0.2}}></div>
            <div className='relative z-2 flex items-center gap-x-1 px-3 py-1'>
                {
                    children ?
                        children : text
                }
            </div>
        </div>
    )
}

export default Tag;