const cache = {};

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

    return new Promise((resolve, reject) => {
        fetch(BASE_URL + cityName, options)
            .then((response) => {
                if (response.status != 200) {
                    if (response.status == 400) {
                        showToast("City not found");
                    }

                    reject(response);
                }

                return response.json();
            })
            .then((response) => {
                if (response.messages) reject(response.messages);
                else resolve(response);
            })
            .catch((error) => {
                console.error(error);
            });
    });
};

const showToast = (msg) => {
    Toastify({
        text: msg,
        style: {
            borderRadius: "7px",
        },
        offset: {
            x: 0,
            y: 55,
        },
    }).showToast();
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
        document.querySelector(`#card${cardNo} .${weatherField}`).innerHTML =
            data[weatherField];
    });
};

const updateCard = (cityName, cardNo) => {
    if (Object.keys(cache).includes(cityName)) {
        updateWeatherFields(cache[cityName], cardNo);
        document.querySelector(`#card${cardNo} .card_title`).innerHTML =
            cityName;

        return;
    }

    document.querySelector(`#card${cardNo} .card_title`).innerHTML = `
        <div class="spinner-border" role="status"></div>
    `;

    getWeather(cityName)
        .then((response) => {
            cache[cityName] = response;
            updateWeatherFields(response, cardNo);
            document.querySelector(`#card${cardNo} .card_title`).innerHTML =
                cityName;
        })
        .catch((error) => {
            console.error(error);
            window.stop();
        });
};

const main = () => {
    updateCard("delhi", 1);
    updateCard("surrey", 2);
    updateCard("patiala", 3);

    document.querySelector("#submit").addEventListener("click", (e) => {
        e.preventDefault();

        // set cache size to 7. removes oldest cache entries
        if (Object.keys(cache).length > 7) {
            delete cache[Object.keys(cache)[0]];
        }

        const value = document
            .getElementById("search-city")
            .value.toLowerCase();
        const card1Title = document
            .querySelector("#card1 .card_title")
            .innerHTML.toLowerCase();
        const card2Title = document
            .querySelector("#card2 .card_title")
            .innerHTML.toLowerCase();
        const card3Title = document
            .querySelector("#card3 .card_title")
            .innerHTML.toLowerCase();

        if (value == card1Title || value == card2Title || value == card3Title) {
            showToast("City already on display");
            return;
        }

        updateCard(card2Title, 3);
        updateCard(card1Title, 2);
        updateCard(value, 1);
    });
};

main();
