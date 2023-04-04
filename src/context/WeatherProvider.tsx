import axios, { AxiosResponse } from "axios";
import { createContext, useState } from "react";

const WeatherContext: any = createContext('')

const WeatherProvider: any = ({ children }: any) =>
{

    const [ search, setSearch ] = useState({
        city: '',
        country: ''
    });

    const [ result, setResult ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ noResults, setNoResults ] = useState('')



    const searchedData = (e: any) =>
    {
        setSearch({
            ...search,
            [ e.target.name ]: e.target.value
        })
    }

    const consultWeather = async (info: any) =>
    {
        setLoading(true)
        setResult('')
        try
        {
            const { city, country } = info;

            const appId = import.meta.env.VITE_API_KEY;

            const url: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`

            const { data }: AxiosResponse<any, any> = await axios(url);

            const { lat, lon } = data[ 0 ];

            const weatherUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: weather } = await axios(weatherUrl)

            setResult(weather)

        } catch (error)
        {
            setNoResults('Theres no results')
        }
        finally
        {
            setLoading(false)
        }

    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                searchedData,
                consultWeather,
                result,
                loading,
                noResults
            }}>
            <header>
                <h1>Weather searcher</h1>
                <img src="icon.png" alt="App icon" width={50} />
            </header>
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider };

export default WeatherContext