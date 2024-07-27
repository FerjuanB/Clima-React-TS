import styles from "./App.module.css"
import { Form } from "./components/Form/Form"
import useWeather from "./components/hooks/useWeather"
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail"

function App() {

const { fetchWeather,weather,weatherData}  = useWeather()
  return (
    <>
     <h1 className={styles.title}>Clima</h1>
   
    <div className={styles.container}>
      <Form
      fetchWeather = {fetchWeather}
      />
      {
        weatherData &&
      <WeatherDetail
      weather={weather}
      />}
    </div>
    </>
  )
}

export default App
