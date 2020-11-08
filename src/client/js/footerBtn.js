const zip = 98101;
const APIUnits = '33d88ff4a1f7f80be70bc95ed99e2434';

function clickButton(event) {
    event.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${APIUnits}&appid=${APIKey}`).
    then(response => response.json(). then(function(response){alert(response.sys.country)}))
}

export { clickButton }