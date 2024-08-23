const BreadCrumb = ({text, link}) => {
    return (
        <a className='cursor-pointer transition-all duration-400 ease-in-out hover:text-gray-400' href={link}>{text}</a>
    )
}

export default BreadCrumb