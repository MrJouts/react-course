import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { LanguageList } from './LanguageList'
import { WeatherCard } from './WeatherCard'

export const CountrySingle = ({country}) => {

  const [weather, setWeather] = useState()

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name.common}`
    console.log('url', url)
    axios.get(url)
      .then(response => {
        console.log(response)
        setWeather(response.data)
      })
  }, [country.name.common])
  
  const languages = () => {
    return Object.keys(country.languages).map(prop => {
      return country.languages[prop]
    })
  } 

  return (
    <div>
      {console.log(weather)}
      <h2>{country.name.official} / {country.name.common}</h2>
      <div className="country-card">
        <img src={country.flags.png} alt="" />
        <p>Population: {country.population}</p>
        <p>Languages:</p>
        <LanguageList languages={languages()} />
      </div>
      <WeatherCard weather={weather} />
    </div>
  )
}
