const dropDown = document.querySelector(".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");
const toggleBtn = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".bx");
const countries = document.querySelector('.countries');
const search = document.querySelector('.search');
const regions = document.querySelectorAll('.regions');
const regionsName = document.getElementsByClassName('regionsName');



toggleBtn.addEventListener("click", e => {
    document.body.classList.toggle("dark-mode");
    toggleIcon.classList.toggle("bxs-moon")
    dropOptions.classList.toggle("dark-mode")
    toggleBtn.classList.toggle("dark-mode")
    search.classList.toggle("dark-mode")
})  

dropDown.addEventListener("click", e => {
    dropOptions.classList.toggle("show-options")
})

async function getContries() {
    const URL = await fetch ('./data.json')
    // https://restcountries.com/v2.1/all
    const res = await URL.json();

    console.log(res);
    res.forEach(contri => {
       showCountries(contri); 
    });
    
}

getContries();

function showCountries(data) {
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = `
    <div class="countries-img">
        <img src=${data.flags.png} alt="Afghanistan-flag">
    </div> 
    <div class="countries-details">
        <h2 class="countryName">${data.name}</h2>
        <p><strong>Population:</strong>${data.population}</p>
        <p class="regionsName"><strong>Region:</strong>${data.region}</p>
        <p><strong>Capital:</strong>${data.capital}</p>
    </div>`;
    countries.appendChild(country);
}

const countryName = document.getElementsByClassName('countryName');

search.addEventListener('input', e => {
    Array.from(countryName).forEach(countri => {
        if(countri.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            countri.parentElement.parentElement.style.display = 'grid';
        } else {
            countri.parentElement.parentElement.style.display = 'none';
        }
    })
})


regions.forEach(region => {
    region.addEventListener('click', e => {
        Array.from(regionsName).forEach(reg => {
            if (reg.innerText.includes(region.innerText) || region.innerText == "All") {
                reg.parentElement.parentElement.style.display = 'grid';
            } else {
                reg.parentElement.parentElement.style.display = 'none'; 
            }
        })
    })
})