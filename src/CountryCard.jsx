const CountryCard = ({name, flagImg, flagAltText})=>{
    return (
        <div style={{
            border: "1px solid black",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px",
            width: "150px",
            height: "160px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"

        }}>
            <img src={flagImg}
            alt={flagAltText}
            style={{
                width: "100px",
                height: "100px"
            }} />

            <h4>{name}</h4>
        </div>
    )
}

export default CountryCard