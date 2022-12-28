import React from "react";
import Loader from "./Loader";

const Card = ({ loadingData, showData, weather, forecast }) => {

    //obteniendo los datos de la fecha
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = day + "/" + month + "/" + year;

    //acceder a los iconos de la api
    let url = ""
    let urlIcon = ""

    // icono url de 3 horas en 3 horas

    let iconUrl3 = ""
    let iconUrl6 = ""
    let iconUrl9 = ""

    let forecastDate3 = ""
    let forecastDate6 = ""
    let forecastDate9 = ""

    if (loadingData)
        return <Loader />


    if (showData) {
        // acceder al icono del clima
        url = "http://openweathermap.org/img/w/"
        urlIcon = url + weather.weather[0].icon + ".png"

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png"
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png"
        // obtener los iconos de la api
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " " + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " " + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + " " + forecast.list[3].dt_txt.substring(11, 13)
    }
    return (
        <div className="mt-14">

            {
                showData === true ? (

                    <div class="container max-w-md mx-auto bg-white rounded-xl shadow-md md:container md:max-w-md md:mx-auto md:bg-red md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:shrink-0 text-white ">
                                <h3 className="card-title font-thin">{weather.name} <span className="code-country">{weather.sys.country}</span></h3>
                                <p className="card-date">{date} </p>
                                {/* pasamos de kelvin a celcius, quitando la constante kelvin */}
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(0)}°C</h1>
                                <p className="card-desc"><img src={urlIcon} className="icon" alt="icon" />{weather.weather[0].description} </p>
                                <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img w-full object-cover md:h-full md:w-48" />
                            </div>
                            <div class="">
                                <div className="text-start text-slate-50">
                                    <h5 className="card-text">Temperatura Máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C <i class="fa-solid fa-temperature-arrow-up"></i></h5>
                                    <h5 className="card-text ">Temperatura Mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C <i class="fa-solid fa-temperature-arrow-down"></i></h5>
                                    <h5 className="card-text">Sensación Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C <i class="fa-solid fa-hand-holding-droplet"></i></h5>
                                    <h5 className="card-text">Humedad: {(weather.main.humidity)}% <i class="fa-solid fa-droplet"></i></h5>
                                    <h5 className="card-text">Velocidad del Viento: {(weather.wind.speed)} m/s <i class="fa-solid fa-wind"></i></h5>
                                </div>
                                <div className="img-right">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/15/22/clouds-1293230_960_720.png" className="object-cover" />
                                </div>
                                <hr />
                                <div className="flex flex-wrap justify-evenly my-5 capitalize container mx-auto">

                                    <div className="juliso ">
                                        <p>{forecastDate3}h</p>
                                        <p className="description"><img src={iconUrl3} alt="icono 3" />{forecast.list[1].weather[0].description} </p>
                                        <p clme="temp">{(forecast.list[1].main.temp - 273.15).toFixed(0)}°C</p>
                                    </div>

                                    <div className="juliso ">
                                        <p>{forecastDate6}h</p>
                                        <p className="description"><img src={iconUrl6} alt="icono 3" />{forecast.list[2].weather[0].description} </p>
                                        <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(0)}°C</p>
                                    </div>
                                    <div className="juliso ">
                                        <p>{forecastDate9}h</p>
                                        <p className="description"><img src={iconUrl9} alt="icono 3" />{forecast.list[3].weather[0].description} </p>
                                        <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(0)}°C</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="containeer-nothing">
                        <div className="max-w-sm w-max lg:max-w-full lg:flex">
                            <div className="grid grid-cols-2 w-max">
                                <div className="col-span-2 text-white ">
                                    <h5 className="card-no">Sin Datos Existentes</h5>
                                    <img src="https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover card-img-nothing" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card