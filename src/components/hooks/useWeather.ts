import axios from 'axios'
import { SearchType, Weather } from '../../types'

function isWeatherResponse(weather : unknown): weather is Weather{
 return(
  Boolean(weather) && 
  typeof weather === 'object' &&
  typeof (weather as Weather).name === 'string' &&
  typeof (weather as Weather).main.temp ==='number'&&
  typeof (weather as Weather).main.temp_max ==='number'&&
  typeof (weather as Weather).main.temp_min ==='number'
 )
}
export default function useWeather() {
  
  
  const fetchWeather = async (search : SearchType) =>{
    const API_KEY = import.meta.env.VITE_API_KEY
    try {
          const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${API_KEY}`

          const {data} = await axios(geoUrl)
          const {lat, lon} = data[0]
          
          const searchW  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          // const {data: weatherResult} = await axios<Weather>(searchW )
          // console.log(Math.round((weatherResult.main.temp - 273.15) * 100 + Number.EPSILON) / 100)

          //typeGuards 
          const {data:weatherResult} = await axios(searchW)
          const result = isWeatherResponse(weatherResult)
          console.log(result)
        
        } catch (error) {
          console.log(error)
        }
  }

    return {
        fetchWeather
  }
}