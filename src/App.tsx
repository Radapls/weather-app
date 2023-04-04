import AppWeather from "./components/AppWeather"
import { WeatherProvider } from "./context/WeatherProvider"


function App()
{

  return (
    <WeatherProvider>
      <AppWeather />
    </WeatherProvider>
  )
}

export default App
