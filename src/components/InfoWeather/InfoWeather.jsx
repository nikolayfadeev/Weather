import React from "react";
import classes from './InfoWeather.module.css'

export default function InfoWeather(props) {
    return(
        <div className={classes.InfoWeather}>
            <h1>Информация о погоде </h1>
            <p>Город: {props.WeatherInfo.name}</p>
            <p>Температура: {props.WeatherInfo.temp}</p>
            <p>Температура: {props.WeatherInfo.wind} м/c</p>
        </div>
    )
}