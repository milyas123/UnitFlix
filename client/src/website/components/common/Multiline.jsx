const Multiline = ({text}) => {
    return (
        <>
            {text.map(t => {
                return (
                    <>
                        {t} <br />
                    </>
                )
            })}
        </>
    )
}

export default Multiline;