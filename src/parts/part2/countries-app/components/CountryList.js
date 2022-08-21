import React from 'react'
import { CountryListItem } from './CountryListItem'

export const CountryList = ({countries, onClick}) => {
  return(
    <ul className="list">
      {
        countries.map( country => 
          <CountryListItem 
          key={country.name.official} 
          name={country.name.common} 
          flag={country.flag} 
          onClick={onClick}/>)
      }
    </ul>
  )
}
