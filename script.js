// Axios Code below
// $ dollar sign with jQuery

// axios.get
// // makes a get request, takes an argument, argument is the url for the get request to go to.

// axios.get('https://restcountries.eu/rest/v2/capital/paris')
// .then((theThingIGetBack)=>{
//   console.log('this is the response', theThingIGetBack.data[0]);
//   // .name logs France, [0] shows data.
//   // ALWAYS CONSOLE.LOG axios before you start with AXIOS
// })
// .catch((err)=>{
//   console.log(err);
// })
// console.log the whole thing, for api's, to be sure they work well.

// every axios response is an OBJECT, not an ARRAY.
// console log in console in browser.
// always things inside of it.
// status:200 code
// Headers: project 3 used, always send here
// data is the massive array with all the objects.

// ATTACH CLICK FUNCTION TO BUTTON IN INDEX.HTML

// country names list
// $('#all-countries-button').click(function(){

//   axios.get('https://restcountries.eu/rest/v2/all')
//   .then((theThingIGetBack)=>{
//     console.log('this is the response', theThingIGetBack.data);
    
//       $('#list').html("<ul id='the-ul'></ul>")
//       // each time button is pressed, contents of list are replaced with a single ul.

//       theThingIGetBack.data.forEach((eachCountry)=>{
//           $('#the-ul').append(`
//           <li>
//           ${eachCountry.name}
//           </li>
//           `)
//       })
//   })
//   .catch((err)=>{
//   console.log(err);
//   })
// });

// function getCountryInfo(){
//   axios.get('https://restcountries.eu/rest/v2/all')
//   .then((theThingIGetBack)=>{
//     console.log('this is the response', theThingIGetBack);


//       theThingIGetBack.data.forEach((eachCountry)=>{
//           $('#the-div').append(`
//           <li>
//           ${eachCountry.capital}
//           </li>
//           `)
//       })
//   })
//   .catch((err)=>{
//   console.log(err);
//   })
// };

// $('#submithere').click(function(){
//   getCountryInfo()
// });

// 
// axios.get('https://restcountries.eu/rest/v2/all')
//   .then((theThingIGetBack)=>{
//     console.log('this is the response', theThingIGetBack.data);

    
//       $('#list').html("<ul id='the-ul'></ul>")
//       // each time button is pressed, contents of list are replaced with a single ul.

//       theThingIGetBack.data.forEach((eachCountry)=>{
//           $('#the-ul').append(`
//           <li>
//           ${eachCountry.name}
//           </li>
//           `)
//       })
//   })
//   .catch((err)=>{
//   console.log(err);
//   });
//  below - is with regular DOM, not jquery
// const restCountriesApi = axios.create({
//   baseURL: 'https://restcountries.eu/rest/v2/name/'
// });

// function getCountryInfo(theName) {
//   restCountriesApi.get(theName)
//   .then(responseFromAPI => {
//       console.log('Response from API is: ', responseFromAPI.data);           
// })
// .catch(err => {
//   console.log('Error is: ', err);
//   })
// }

// document.getElementById("theButton").onclick = function(){
//   const country = document.getElementById("theInput").value;       
//   getCountryInfo(country);
// }

// $('#all-countries-button').click(function(){

//     axios.get('https://restcountries.eu/rest/v2/name')
//     .then((theThingIGetBack)=>{
//       console.log('this is the response', theThingIGetBack.data);
  
//         theThingIGetBack.data.forEach((eachCountry)=>{
//             ${eachCountry.capital}
//         })
//     })
//     .catch((err)=>{

//     })
//   });

//   prevent default stops button from refreshing

//   // correct version
  function getCountry(e) {
    e.preventDefault();
 
    let input = $("#capitalHere").val()
    axios.get('https://restcountries.eu/rest/v2/capital/'+input)
    .then((response) => {
        $("#answer").html(response.data[0].name)
 })
    .catch(err => {
        console.log('err => ', err)
    })
 }
 
 $('#submitHere').click(getCountry);

 function getDetails(e) {
   e.preventDefault();

   let inputTwo = $("country-details").val()
   axios.get('https://restcountries.eu/rest/v2/capital/'+inputTwo)
  .then((response)=>{
    $("#details-answer").html(response.data[0].)
  })
  .catch(err => {
    console.log('err => ', err)
  })
 }
 $('#');

//  <h1>Axios Intro</h1>

// <button id="all-countries-button"> Get All The Countries</button>
// <br>
// <br>
// <div id="list"></div>

// <form action="">
//    Name of Country Capital:<br>
//    <input id="capitalHere" type="text" name="capital" value="">
//    <br>
//    <button id="submitHere" type="submit" value="Submit">Get Country Name</button>

//    <div id="answer"></div>
//  </form>
// <br>
// <br>
//  <form action="">
//    Name of Country:<br>
//    <input id="countryHere" type="text" name="country" value="">
//    <br>
//    <button id="submit2Here" type="submit" value="Submit">Get Country Info</button>
// <br>
//    <span>Country Name: <span id="name"></span></span><br>
//    <span>Native Name: <span id="nativeName"></span></span><br>
//    <span>Capital: <span id="theCapital"></span></span><br>
//    <span>Region: <span id="region"></span></span><br>
//    <span>Population: <span id="population"></span></span>
//  </form>

// function getCountry(e) {
//   e.preventDefault();

//   let input = $("#capitalHere").val()
//   axios.get('https://restcountries.eu/rest/v2/capital/'+input)
//   .then((response) => {
//       $("#answer").html(response.data[0].name)
// })
//   .catch(err => {
//       console.log('err => ', err)
//   })
// }

// $('#submitHere').click(getCountry);


// function getCountryInfo(e) {
//   e.preventDefault();

//   let input2 = $("#countryHere").val()
//   axios.get('https://restcountries.eu/rest/v2/name/'+input2)
//   .then((response) => {
//       console.log(response)
//       $("#name").html(response.data[0].name)
//       $("#nativeName").html(response.data[0].nativeName)
//       $("#theCapital").html(response.data[0].capital)
//       $("#region").html(response.data[0].region)
//       $("#population").html(response.data[0].population)
//   })
//   .catch(err => {
//       console.log('err => ', err)
//   })
// }

// $('#submit2Here').click(getCountryInfo);