function updateTime() {
  let losAngeles = document.querySelector("#los_angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:m:ss [<small>] A [</small>]",
  );

  let Sydney = document.querySelector("#sydney");
  let SydneyDate = Sydney.querySelector(".date");
  let SydneyTimeElement = Sydney.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");
  SydneyDate.innerHTML = SydneyTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:m:ss [<small>] A [</small>]",
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">
    ${cityTime.format("h:mm:ss")} 
    <small>
    ${cityTime.format("A")} 
    </small>
    </div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
