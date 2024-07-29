import styles from "./App.module.css"
import { Alert } from "./components/Alert/Alert"
import { Form } from "./components/Form/Form"
import useWeather from "./components/hooks/useWeather"
import { Spin } from "./components/Spin/Spin"
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail"

function App() {

const { fetchWeather,weather,weatherData,loading, notFound}  = useWeather()
  return (
    <>
     <h1 className={styles.title}>Clima</h1>
   
    <div className={styles.container}>
      <Form fetchWeather = {fetchWeather}/>
      {loading && <Spin />}
      {weatherData && <WeatherDetail weather={weather} />}
      {notFound && <Alert> Ciudad no encontrada </Alert>}
    </div>
    </>
  )
}

export default App
