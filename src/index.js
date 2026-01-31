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

updateTime();
setInterval(updateTime, 1000);
