"use-client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCloud,
    faUmbrella,
    faSnowflake,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/dist/server/api-utils";

const WeatherIcon = ({weatherType}) => {
    switch(weatherType) {
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud}/>;
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella}/>; 
        case "Clear":
            return <FontAwesomeIcon icon={faSun}/>;   
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake}/>; 
        case "Thunderstorm":
            return <FontAwesomeIcon icon={faBolt}/>; 
        default:
            return <div>this works</div>;
    }
};
export default WeatherIcon;
 