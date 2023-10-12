import "../app/globals.css";
import WeatherCard from "@/app/components/WeatherCard";
import Header from "../app/components/Header";

export async function getStaticProps( { params }) {
    const city = (params && params.city) || "Boston";
    const res = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_APP_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();
    return {
        props: {
            weatherData,
            },
        };
    };

export const getStaticPaths = async () => {
    return {
        paths: [], 
        fallback: true,
    };
};

export default function Home({weatherData, inter}) {
    if(!weatherData) return null;
    return (
        <>
        <Header />
        <main>
            <h1>Weather App</h1>
            <WeatherCard 
            cityName = {weatherData.name} 
            weatherType = {weatherData.weather[0].main} 
            currentTemp = {weatherData.main.temp}
            highTemp = {weatherData.main.temp_max} 
            lowTemp = {weatherData.main.temp_min}
            cloudiness = {weatherData.clouds.all}
            humidity = {weatherData.main.humidity}
            windSpeed = {weatherData.wind.speed}
            />
        </main>
        </>
    );

}

