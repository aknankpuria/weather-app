const getWeather = async (cityName) => {
    const BASE_URL =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "4f005d65e2mshc555866a4dd6983p1cb008jsnb67c4514cb1b",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    return fetch(BASE_URL + cityName, options);
};

const updateWeatherFields = (data, cardNo) => {
    const weatherFields = [
        "temp",
        "feels_like",
        "humidity",
        "max_temp",
        "min_temp",
        "wind_speed",
        "wind_degrees",
    ];

    weatherFields.forEach((weatherField) => {
        const weatherFieldElement = document.querySelector(
            `#card${cardNo} .${weatherField}`
        );
        weatherFieldElement.innerHTML = data[weatherField];
    });
};

const updateCard = (cityName, cardNo) => {
    document.querySelector(`#card${cardNo} .card_title`).innerHTML = cityName;

    getWeather(cityName)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            if (response.messages) console.error(response);
            else updateWeatherFields(response, cardNo);
        })
        .catch((error) => {
            console.error(error);
        });
};

submit.addEventListener("click", (e) => {
    e.preventDefault();

    updateCard(document.querySelector("#card2 .card_title").innerHTML, 3);
    updateCard(document.querySelector("#card1 .card_title").innerHTML, 2);
    updateCard(document.getElementById("search-city").value, 1);
});

updateCard("delhi", 1);
updateCard("chandigarh", 2);
updateCard("patiala", 3);
