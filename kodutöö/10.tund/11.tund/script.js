document.addEventListener("DOMContentLoaded", function () {
    const countryDropdown = document.getElementById('countryDropdown');
    const countryInfo = document.getElementById('countryInfo');

    
    function fillCountryDropdown() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                data.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.name.common;
                    option.textContent = country.name.common;
                    countryDropdown.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching country data:', error));
    }

    function getCountryInfo(countryName) {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => response.json())
            .then(data => {
                const country = data[0];
                countryInfo.innerHTML = `
                    <p>Common Name: ${country.name.common}</p>
                    <p>Capital: ${country.capital}</p>
                    <p>Population: ${country.population}</p>
                    <p>Region: ${country.region}</p>
                `;
            })
            .catch(error => console.error('Error fetching country info:', error));
    }

    countryDropdown.addEventListener('change', function () {
        const selectedCountry = countryDropdown.value;
        getCountryInfo(selectedCountry);
    });

    fillCountryDropdown();
    getCountryInfo(countryDropdown.value);
});
