const search_button = document.getElementById("search_button");
const search = document.getElementById("search_bar_id");
const p_tag = document.getElementById('p_tag');
const temperature = document.getElementById("temperature")
const getinfo = async (event)=>{
    event.preventDefault();
    let cityname = search.value;
    if(cityname === ''){
        p_tag.innerText = `Please write the name before search`;
    }
    else{
        try{            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=565df217d8a66df72d4e8582e7eb2c7e`

            const response = await fetch(url);
            const data = await response.json();
            
            const arrData = [data];

            //  temperature.innerText = arrData[0].main.temp -273.15;
            //  let b = math.round(a*10)/10;
                let  t = arrData[0].main.temp -273.15;
              let b = Math.round(t * 10) / 10;
              temperature.innerText = b;
             p_tag.innerText=` ${cityname}'s Weather`;
            let weather_value = arrData[0].weather[0].main ;
            let weather_image = document.getElementById('weather-picture');
            if(weather_value == 'Clouds'){
                // alert('cloudy day')
weather_image.src = '../css/images/cloudpic.png';
            }
            else{
                // alert("it's not cloudy")
                weather_image.src = "../css/images/sunpic.jpg";
            }
            console.log(weather_value);

            console.log(arrData);
        }
        catch{
            p_tag.innerText = `Please write the city name properly`;
        }


        
        

        
    }
}
    

search_button.addEventListener('click',getinfo);
