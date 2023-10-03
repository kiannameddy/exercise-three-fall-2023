"use client"
import styles from "./WeatherCard.module.css"

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
    <div className={styles.WeatherCardWrapper}>
        <h2>{cityName}</h2>
        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemp}</p>
        <p>High Temperature: {highTemp}</p>
        <p>Low Temperature: {lowTemp}</p>
        <p>Cloudiness: {cloudiness}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {windSpeed}</p>
    </div>
)

export default WeatherCard; 