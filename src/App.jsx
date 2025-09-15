import { FaSearch, FaTint, FaWind } from 'react-icons/fa'
import sunny from './assets/sunny.png'

function App() {
  return (
    <>
      <div className="form-div">
        <div className="search-div">
          <input className="search-bar" type="text" placeholder="Search"></input>
          <FaSearch className="search-icon" />
        </div>
        <img src={sunny} alt="search" />
        <div className="info">
          <p className='temp'>61 °C</p>
          <p className='location'>Nairobi</p>
        </div>
        <div className="details">
          <div>
            <div className="humid">
              <FaTint /> 
              <p>20%</p>
            </div>
            <span>humidity</span>
          </div>
          <div>
            <div>
              <FaWind />
              <p>10 km/h</p>
            </div>
            <span>windspeed</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
