import styles from "./App.module.css"
import { Form } from "./components/Form/Form"
import useWeather from "./components/hooks/useWeather"

function App() {

const { fetchWeather} = useWeather()
  return (
    <>
     <h1 className={styles.title}>Clima</h1>
   
    <div className={styles.container}>
      <Form
      fetchWeather = {fetchWeather}
      />
    </div>
    </>
  )
}

export default App
