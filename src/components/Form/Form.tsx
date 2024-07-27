import { ChangeEvent, FormEvent, useState } from "react"
import { countries } from "../../data/countries"
import type {SearchType} from '../../types/index'
import styles from './Form.module.css'
import { Alert } from "../Alert/Alert"

type FormProps = {
    fetchWeather :(search: SearchType) => Promise<void>
}

export const Form = ({fetchWeather}: FormProps) => {


 const [search,setSearch] = useState<SearchType>({
    city:'',
    country:''
 })   

const [alert,setAlert] = useState('')

 const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
    setSearch({
        ...search,
        [e.target.name]:e.target.value,
    })
 }

 const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(Object.values(search).includes("")){
        setAlert('todos los campos están vacíos')
    }
    fetchWeather(search)
 }
    return (
        <form 
        onSubmit={handleSubmit}
        className={styles.form}>
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input 
        id="city"
        type="text"
        name="city"
        placeholder="Ciudad" 
        value={search.city}
        onChange={handleChange}
        />
        </div>
        
    <div className={styles.field} >
        <label htmlFor="country">País:</label>
           <select 
           id="country"
           name="country"
           onChange={handleChange}
           value={search.country}>
        
                   <option
                   id="country"
                   >Seleccione un País --</option>
                   {countries.map(country =>(
                       <option key={country.code} value={country.code}>
                        {country.name}</option>
                   ))}
           </select>
        </div>
        <input type="submit" className={styles.submit} value="Consultar clima" />
        </form>
  )
}