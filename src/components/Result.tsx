import useWeather from "../hooks/useWeather";

export default function Result()
{
    const { result }: any = useWeather()
    const { name, main: { temp, temp_min, temp_max } } = result;

    const kelvin: number = 273.15

    return (
        <div className="container weather">
            <h2>The weather of {name} is:</h2>

            <p>{Math.round(temp - kelvin)} <span>&#x2103;</span></p>

            <div className="temp_min_max">
                <p>Min: {Math.round(temp_min - kelvin)} <span>&#x2103;</span></p>
                <p>Max: {Math.round(temp_max - kelvin)} <span>&#x2103;</span></p>
            </div>

        </div>
    )
}
