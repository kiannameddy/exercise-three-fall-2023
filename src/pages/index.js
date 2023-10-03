import "../app/globals.css" 

export async function getStaticProps() {
    const res = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${process.env.WEATHER_APP_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();
return {
    props: {
        weatherData,
        },
    };
}
export default function Home({weatherData}) {
    console.log(weatherData);
    return (
        <main>
            <h1>Weather App</h1>
        </main>
    );
}