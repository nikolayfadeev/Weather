import React from "react";
import classes from "./FormWeather.module.css"

export default function FormWeather(props) {
    return(
        <form onSubmit={props.getWeatherInfo} className={classes.FormWeather}>
            <h2>Введите город для получения погоды</h2>
            <div className="wrap-inputs">
            <input type="text" name="city" placeholder="Город" className={classes.city}/>
            <button className={classes.btn}>Получить погоду</button>
            </div>
        </form>
    )
}