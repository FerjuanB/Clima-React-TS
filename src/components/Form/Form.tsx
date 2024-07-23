import { countries } from "../../data/countries"

export const Form = () => {
    return (
        <form>
        <div>
        <label htmlFor="city">Ciudad:</label>
        <input type="text"
        id="city"
        placeholder="Ciudad" />
        </div>
        
    <div>
        <label htmlFor="country">País:</label>
           <select name="" id="">
        
                   <option 
                   id="country"
                   >Seleccione un País --</option>
                   {countries.map(country =>(
                       <option key={country.code} value={country.code}>{country.name}</option>
                   ))}
           </select>
        </div>
        <input type="submit" value="Consultar clima" />
        </form>
  )
}