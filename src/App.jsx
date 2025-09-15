import { useState, useEffect, useRef } from 'react'
import { FaSearch, FaTint, FaWind } from 'react-icons/fa'

function App() {

  const [weatherData, setWeatherData] = useState(false)
  const inputref = useRef()

  const search = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
    const res = await fetch(url)

    if(!res.ok){
      throw new Error('City not found')
    }

    const data = await res.json()
    console.log(data)
    setWeatherData({
      temp: data.main.temp,
      location: data.name,
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
  }

  useEffect(() => {
    search('Nairobi')
  }, [])


  return (
    <>
      <div className="form-div">
        <div className="search-div">
          <input className="search-bar" ref={inputref} type="text" placeholder="Search"></input>
          <FaSearch className="search-icon" onClick={() => search(inputref.current.value)}/>
        </div>
        <img className='image' src={weatherData.icon} alt="search" />
        <div className="info">
          <p className='temp'>{Math.floor(weatherData.temp)} °C</p>
          <p className='location'>{weatherData.location}</p>
        </div>
        <div className="details">
          <div>
            <div className="humid">
              <FaTint /> 
              <p>{weatherData.humidity}%</p>
            </div>
            <span>humidity</span>
          </div>
          <div>
            <div className="wind">
              <FaWind />
              <p>{weatherData.windspeed} km/h</p>
            </div>
            <span>windspeed</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
