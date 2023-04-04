import { useState } from "react";
import useWeather from "../hooks/useWeather";

export default function Form()
{
    const [ alert, setAlert ] = useState('')

    const { search, searchedData, consultWeather }: any = useWeather()

    const { city, country } = search;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        if (Object.values(search).includes(''))
        {
            setAlert('All the fields are required');
            return;
        }

        setAlert('')
        consultWeather(search);
    }

    return (
        <div className="container">

            {alert && <p>{alert}</p>}

            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={searchedData} value={city} />
                </div>
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country" onChange={searchedData} value={country}>
                        <option value="">--- Select a country ---</option>
                        <option value="US">United States</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">Spain</option>
                    </select>



                </div>

                <input type="submit" value="Search weather" />
            </form>
        </div>
    )
}
