const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f005d65e2mshc555866a4dd6983p1cb008jsnb67c4514cb1b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const weather1 = (c1) => {
	city1.innerHTML=c1;

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+c1, options)
	.then(response => response.json())
	.then(response => {

		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		//sunrise.innerHTML = response.sunrise
		//sunset.innerHTML = response.sunset


		console.log(response)





	})
	.catch(err => console.error(err));
}


const weather2 = (cc) => {
	city2.innerHTML=cc

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cc, options)
	  .then(response => response.json())
	  .then(response => {
  
		  //cloud_pct.innerHTML = response.cloud_pct
		  temp2.innerHTML = response.temp
		  feels_like2.innerHTML = response.feels_like
		  humidity2.innerHTML = response.humidity
		  min_temp2.innerHTML = response.min_temp
		  max_temp2.innerHTML = response.max_temp
		  wind_speed2.innerHTML = response.wind_speed
		  wind_degrees2.innerHTML = response.wind_degrees
		  //sunrise.innerHTML = response.sunrise
		  //sunset.innerHTML = response.sunset
  
  
		  console.log(response)
  
  
  
  
  
	  })
	  .catch(err => console.error(err));
  }

  const weather3 = (c3) => {
	city3.innerHTML=c3

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+c3, options)
	  .then(response => response.json())
	  .then(response => {
  
		  //cloud_pct.innerHTML = response.cloud_pct
		  temp3.innerHTML = response.temp
		  feels_like3.innerHTML = response.feels_like
		  humidity3.innerHTML = response.humidity
		  min_temp3.innerHTML = response.min_temp
		  max_temp3.innerHTML = response.max_temp
		  wind_speed3.innerHTML = response.wind_speed
		  wind_degrees3.innerHTML = response.wind_degrees
		  //sunrise.innerHTML = response.sunrise
		  //sunset.innerHTML = response.sunset
  
  
		  console.log(response)
  
  
  
  
  
	  })
	  .catch(err => console.error(err));
  }
 
  submit.addEventListener (  "click", (e)=> {

   e.preventDefault();

   weather3(city2.innerHTML);
   weather2(city1.innerHTML);
   
   
   weather1(city.value);
	
  }


  )

  weather3("delhi");
  weather2("chandigarh");
  weather1("patiala");
