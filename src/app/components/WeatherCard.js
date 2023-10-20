"use client"
import styles from "./WeatherCard.module.css"
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({
    cityName,
    weatherType, 
    currentTemp,
    highTemp,
    lowTemp,
    cloudiness,
    humidity,
    windSpeed
}) => (
    
    <div className={styles.WeatherCardWrapper}
         style= {{color: `rbga(0,0,0,0.${cloudiness})`}}
    >

        <h2>{cityName}</h2>
        <div className={styles.WeatherCardImage}>
            <WeatherIcon weatherType={weatherType}/>
        </div>
        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemp}&deg;</p>
        <p>High Temperature: {highTemp}&deg;</p>
        <p>Low Temperature: {lowTemp}&deg;</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed}mph</p>
    </div>
)

export default WeatherCard; 