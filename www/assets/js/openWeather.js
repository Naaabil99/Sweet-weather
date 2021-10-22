
var languaje = "";
$(document).ready(function() {
    $(".spanishlang").click(function () {
        languaje = "es";
    });

    $(".englishlang").click(function () {
        languaje = "en";
    });
});
function OpenWeather() {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/';

}


OpenWeather.prototype.getGeolocation = function(){

    var apiUrl = this.apiUrl;
    var onSuccess = function(position) {
   var crd = position.coords;
    var lat = Math.round(crd.latitude)
    var lon = Math.round(crd.longitude)


    $.get(apiUrl + "weather?lang=" + languaje + "&lat=" + lat + "&lon=" + lon + "&appid=5440343ae5883f550724120bd6feac95", function(response){
        var resultlocation="";
        var forecast = response;

        if (forecast && Object.keys(forecast).length > 0) {

            resultlocation += '<div class=card style="width: 18rem">'
            resultlocation += '<img class="card-img-top" src= ' + "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" + ' />'
            resultlocation += '<div class="card-body">'
            resultlocation += '<h4 class="card-title">' + forecast.weather[0].main  +'</h4>'
            resultlocation += '<p>' + forecast.weather[0].description + '</p>' + '</div>' + '</div>'
        } else {

            resultlocation = 'No se han encontrado issues en el repositorio de jQuery';
        }

        $('#searchbygeolocation').html(resultlocation);


    } );
};

    navigator.geolocation.getCurrentPosition(onSuccess)

}

OpenWeather.prototype.getCurrentWeather = function(city) {
 

    $.get(this.apiUrl + "weather?lang=" + languaje + "&q=" + city + "&appid=5440343ae5883f550724120bd6feac95", function(response) {
        var resultcurrent="";
        var forecast = response;
        // Object.keys(name).length
        if (forecast && Object.keys(forecast).length > 0) {
            if (languaje === "es"){
                resultcurrent += '<h2>' + "Tiempo actual" + '</h2>'
            }
            else{
                resultcurrent += '<h2>' + "Actual weather" + '</h2>'
            }

            resultcurrent += '<div class=card style="width: 18rem">'
            resultcurrent += '<img class="card-img-top" src= ' + "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" + ' />'
            resultcurrent += '<div class="card-body">'
            resultcurrent += '<h4 class="card-title">' + forecast.weather[0].main  +'</h4>'
            resultcurrent += '<p>' + forecast.weather[0].description + '</p>' + '</div>' + '</div>'
        } else {

            resultcurrent = 'No se han encontrado issues en el repositorio de jQuery';
        }

        $('#resultcurrent').html(resultcurrent);
    });
};

OpenWeather.prototype.get5dayWeather = function(city) {



    $.get(this.apiUrl + "forecast?lang=" + languaje + "&q=" + city + "&appid=5440343ae5883f550724120bd6feac95", function (response){
       var result5days = "";
       var forecast = response;

        if (forecast && Object.keys(forecast).length > 0) {

            var days = forecast.list.filter(function (value,index){
                return index % 8 == 0;
            });

            if (languaje === "es"){
                result5days += '<h2>' + "Tiempo los próximos 5 días" + '</h2>'
            }
            else{
                result5days += '<h2>' + "Weather in the next 5 days" + '</h2>'
            }


            $.each(days, function (index, day){
                result5days += '<div class=col-sm-12>'
                result5days += '<div class=card style="width: 18rem">'
                result5days += '<img class="card-img-top" src= ' + "https://openweathermap.org/img/w/" + day.weather[0].icon + ".png" + ' />'
                result5days += '<div class="card-body">'
                result5days += '<h4 class="card-title">' + day.weather[0].main  +'</h4>'
                result5days += '<p>' + day.dt_txt + '</p>'
                result5days += '<p>' + day.weather[0].description + '</p>' + '</div>' + '</div>' + '</div>'
            });





        } else {

            result5days = 'No se han encontrado issues en el repositorio de jQuery';
        }
        $('#result5days').html(result5days);
    });

}


$(function (){
    var openWeather = new OpenWeather();

    $('#bsearch').on('click', function () {

        openWeather.getCurrentWeather($('#cityName').val());
        openWeather.get5dayWeather($('#cityName').val());
        
    });

    $('#ubicacion').on('click', function(){
        openWeather.getGeolocation();
    })
    
})
