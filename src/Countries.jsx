import { useState, useEffect } from "react"
import CountryCard from "./CountryCard"

const Countries = ()=>{

    const APIurl= 'https://xcountries-backend.azurewebsites.net/all'

    const [countries, setCountry]=useState()
    const [load, setLoad]=useState(false)

    const fetchData = async()=>{
        try{
            const response = await fetch(APIurl)
            const data = await response.json()
            setCountry(data)
            setLoad(true)
        }catch(e){
            console.error("Error fetching data:")
        }
    }

    useEffect(()=>{
        fetchData()},[])

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {load
            ?countries.map((country)=>(
                <CountryCard key={country.abbr} 
                name={country.name} 
                flagImg={country.flag} 
                flagAltText={country.abbr} />
            ))
        : 'loading...' }
            

        </div>
    )
}

export default Countries