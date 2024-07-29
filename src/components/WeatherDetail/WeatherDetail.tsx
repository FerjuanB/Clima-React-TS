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
        <h2>clima en </h2>
        <h2>{weather.name}</h2>
        <p className={styles.temp}>  {formatTemp(weather.main.temp)} &deg;C   </p>
    </div>
    <div className={styles.minmaxTemp}>                                   
        <p>máx: {' '}<span>{formatTemp(weather.main.temp_max)} &deg;C</span></p>
        <p> mín: {' '}<span>{formatTemp(weather.main.temp_min)} &deg;C</span></p>
    </div>
    </div>
    
  )
}