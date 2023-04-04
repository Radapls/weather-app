import { createContext, useState } from "react";

const WeatherContext: any = createContext('')

const WeatherProvider: any = ({ children }: any) =>
{
    const [ search, setSearch ] = useState({
        city: '',
        country: ''
    });

    const searchedData = (e: any) =>
    {
        setSearch({
            ...search,
            [ e.target.name ]: e.target.value
        })
    }

    const consultWeather = (data: any) =>
    {
        console.log(data)
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                searchedData,
                consultWeather
            }}>
            <header>
                <h1>Weather searcher</h1>
                <img src="/src/assets/icon.png" alt="App icon" width={50} />
            </header>
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider };

export default WeatherContext