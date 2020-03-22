import React from 'react';
import './App.css';
import InfoWeather from './components/InfoWeather/InfoWeather';
import FormWeather from "./components/FormWeather/FormWeather";

const KEY_API = "434b2f6248cf895af0f14fe9ed4e75b9";

class App extends React.Component{

    state = {
        WeatherInfo: {
            temp: 'Появиться как выберите город',
            name: 'Выберите город',
            wind: 'Скорость ветра пока неизвестна'
        }
    }

    getWeatherInfo = async (e) => {
        e.preventDefault()
        console.log("Запрос пошёл")
        let city = e.target.elements.city.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}`;


        const response = await fetch(url)
        const data = await response.json();


        let WeatherInfo = this.state.WeatherInfo;
        city = city[0].toUpperCase() + city.substring(1);

        WeatherInfo.name = city;
        WeatherInfo.temp = ((data.main.temp)-273).toFixed(1) // Переводим из кельвинов в цельсии, так же округляем до 1 десятой
        WeatherInfo.wind = data.wind.speed

        this.setState({
            WeatherInfo: WeatherInfo
        })

        console.log(data)
    }


    render() {
        return (
            <div className="App">
                <InfoWeather
                    WeatherInfo={this.state.WeatherInfo}
                />
                <FormWeather
                    getWeatherInfo={this.getWeatherInfo}
                />
            </div>
        )
    }
}

export default App;
