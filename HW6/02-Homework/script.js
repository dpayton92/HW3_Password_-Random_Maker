var key = "dcb032e7613d577be037c41656025cdf";
var city = "YOUR CITY"; // 
var url = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  
  }
});