const showDetails = document.querySelector(".showDetails");
const fullAddress = document.querySelector(".fullAddress");

let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
let apiKey = "4f60eb38f64c4f26a5424f42b15c2f7b";

const getCurrentAddress = async (latitude, longitude) => {
    let query = `${latitude},${longitude}`;
    let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        fullAddress.textContent = `User Address: ${data.results[0].formatted}`;
    } catch (error) {
        console.log(error);
    }
};

document.querySelector(".geo-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                showDetails.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                getCurrentAddress(latitude, longitude);
            },
            (error) => {
                showDetails.textContent = error.message;
                console.log(error.message);
            }
        );
    }
});

const signupBtn = document.getElementById("signup");
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email')
    const name = document.getElementById('signup-name')
    const password = document.getElementById('signup-password')

    console.log(`${email.value} ${name.value} ${password.value}`)
});
