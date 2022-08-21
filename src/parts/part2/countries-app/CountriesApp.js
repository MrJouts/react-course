import axios from "axios"
import { useState, useEffect } from "react"
import { CountryList } from "./components/CountryList"
import { CountrySingle } from "./components/CountrySingle"
import './styles.css'

const CountriesApp = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const [filter, setFilter] = useState('')

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value)
  }

  const filteredCountries = filter ?
    countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) : countries

  return (
    <div className="main">
      <div className="col-filter">
        <h1>Countries App</h1>
        <input type="text" placeholder="search for a Country" value={filter} onChange={handleFilterChange} />
        {
          filteredCountries.length > 10 ?
            <div>Too many matches, specify another filter.</div> : 
            filteredCountries.length <= 10 && filteredCountries.length !== 1 ?
              <CountryList countries={filteredCountries} onClick={(filter) => setFilter(filter)} /> :
              null
        }
      </div>
      <div className="col-data">
        { filteredCountries?.length === 1 ? <CountrySingle country={filteredCountries[0]} /> : null }
      </div>
    </div>
  )
}

export default CountriesApp
