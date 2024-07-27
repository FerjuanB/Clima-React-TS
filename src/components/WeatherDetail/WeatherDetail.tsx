import { formatTemp } from "../../utils"
import { Weather } from "../hooks/useWeather"
import styles from './Weather.module.css'
type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetail = ({weather} : WeatherDetailProps) => {
    return (
    
    <div className={styles.main}>

    <div>
        <h2>clima en {weather.name}</h2>
        <p>temperatura actual <span> {formatTemp(weather.main.temp)} &deg;C   </span></p>
    </div>
    <div>                                   
        <h4>maxima para hoy <span>{formatTemp(weather.main.temp_max)} &deg;C</span></h4>
        <h4>minima para hoy <span>{formatTemp(weather.main.temp_min)} &deg;C</span></h4>
    </div>
    </div>
    
  )
}