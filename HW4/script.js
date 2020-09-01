
var form = document.getElementById('search-form');

form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  document.getElementById("present_result").innerHTML = "";
  if(this.elements.query.value === '') {
    alert("Enter search word!");
  } else {
    var rawInputData = this.elements.query.value;
    var fixedInputData = rawInputData.split(" ");
    var inputData = encodeQueryData(fixedInputData);
    var inputDataGif = encodeQueryDataGif(fixedInputData);

    function encodeQueryData(data) {
       let ret = [];
       for (let d in data)
         ret.push(encodeURIComponent(data[d]));
       return ret.join('%20');
    }

    function encodeQueryDataGif(data) {
       let ret = [];
       for (let d in data)
         ret.push(encodeURIComponent(data[d]));
       return ret.join('+');
    }

    var omdbAPI = new XMLHttpRequest();
    var gifAPI = new XMLHttpRequest();
    var omdbURL = "http://www.omdbapi.com/?s=" + inputData + "&type=movie";
    var gifURL = "http://api.giphy.com/v1/gifs/search?q=" + inputDataGif + "&limit=1&api_key=dc6zaTOxFJmzC";

    omdbAPI.addEventListener("load", function() {
      if (this.responseText === '{"Response":"False","Error":"Movie not found!"}')
      {
        alert("No result.");
      } else {
        var result = JSON.parse(this.responseText);
        console.log(result);
        result = JSON.stringify(result);
        document.getElementById("present_result").innerHTML = result;
      }
    });

      gifAPI.addEventListener("load", function() {
        if (this.responseText === '{"Response":"False","Error":"Not found!"}')
        {
          alert("No Result.");
        } else {
          var result = JSON.parse(this.responseText);

          console.log(result);
          result = JSON.stringify(result);
          document.getElementById("present_gif").innerHTML = result;
        }
      });

    omdbAPI.open("get", omdbURL, true);
    omdbAPI.send();
    gifAPI.open("get", gifURL, true);
    gifAPI.send();
  }
}