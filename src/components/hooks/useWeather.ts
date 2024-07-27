import axios from 'axios'
import {z} from 'zod'
// import {object,string, number, InferOutput,parse } from 'valibot'
import { SearchType } from '../../types'
import { useMemo, useState } from 'react'


//TypoeGuard o Assertion
// function isWeatherResponse(weather : unknown): weather is Weather{
//  return(
//   Boolean(weather) && 
//   typeof weather === 'object' &&
//   typeof (weather as Weather).name === 'string' &&
//   typeof (weather as Weather).main.temp ==='number'&&
//   typeof (weather as Weather).main.temp_max ==='number'&&
//   typeof (weather as Weather).main.temp_min ==='number'
//  )
// }

//ZOD
const Weather =z.object({
  name:z.string(),
  main:z.object({
    temp:     z.number(),
    temp_max: z.number(),
    temp_min: z.number()
  })
})
export type Weather = z.infer <typeof Weather>


//VALIBOT
// const WeatherSchema = object({
//   name: string(),
//   main: object({
//     temp:number(),
//     temp_max:number(),
//     temp_min:number()
//   })
// })

// type Weather = InferOutput<typeof WeatherSchema>

export default function useWeather() {
  
  const [weather,setWeather] = useState<Weather>({
    name:'',
    main:{
      temp:0,
      temp_max:0,
      temp_min:0,
    }
  })
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
          // const {data:weatherResult} = await axios(searchW)
          // const result = isWeatherResponse(weatherResult)
          // console.log(result)
        
         //ZOD
        const {data: weatherResult} = await axios(searchW)
        const result = Weather.safeParse(weatherResult)
        if(result.success){
          setWeather(result.data)
          console.log(result.data.name)
        }
        
        //ValiBOT
        //   const {data: weatherResult} = await axios(searchW)
        //   const result = parse(WeatherSchema, weatherResult)
        //   console.log(result)
        //   console.log(Math.round((result.main.temp - 273.15) * 100 + Number.EPSILON) / 100)
        //   console.log(Math.round((result.main.temp_max - 273.15) * 100 + Number.EPSILON) / 100)
        //   console.log(Math.round((result.main.temp_min - 273.15) * 100 + Number.EPSILON) / 100)
     
     
     
      } catch (error) {
          console.log(error)
        }
      
  }
  const weatherData = useMemo(() => weather.name,[weather])
    return {
        fetchWeather,
        weather,
        weatherData
  }
}