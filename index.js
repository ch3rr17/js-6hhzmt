// Import stylesheets
import './style.css';

// Write Javascript code!

// LOCATIONS API
var specialtyOne = 'Asthma';
var locationsUrlOne = `https://liveapi.yext.com/v2/accounts/me/entities?v=20210215&api_key=ac4b14f3bd0d47fff1c80737d8202916&filter={"$or":[{"c_medicalServices.name1":{"$contains":"${specialtyOne}"}},{ "c_medicalServices.name2":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name3":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name4":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name5":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name6":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name7":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name8":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name9":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name10":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name11":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name12":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name13":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name14":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name15":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name16":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name17":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name18":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name19":{ "$contains": "${specialtyOne}"}},{ "c_medicalServices.name20":{ "$contains": "${specialtyOne}"}}]}&limit=5&offset=0`;

function getLocations() {
  return fetch(locationsUrlOne)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

getLocations().then((data) => {
  console.log('loc1: ',data);

  var locationsArray = data.response.entities;
  for (let i = 0; i < locationsArray.length; i++) {
    var location = locationsArray[i];
   // console.log('locations :', location);

    var locationName = location.name;
    // console.log('lname',locationName);

    var photo = location.c_heroSectionPhoto.url;
    // console.log('photo', photo);

    $('.locations-container-one').append(
      `<p>${locationName}</p>
      <p><img src="${photo}" style="width: 150px; height: auto"/></p>
      `
    );
  }
});

// LOCATIONS API
// var specialtyTwo = 'Apheresis';
// var locationsUrlTwo = `https://liveapi.yext.com/v2/accounts/me/entities?v=20210215&api_key=ac4b14f3bd0d47fff1c80737d8202916&filter={"$or":[{"c_medicalServices.name1":{"$contains":"${specialtyTwo}"}},{ "c_medicalServices.name2":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name3":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name4":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name5":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name6":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name7":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name8":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name9":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name10":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name11":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name12":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name13":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name14":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name15":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name16":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name17":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name18":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name19":{ "$contains": "${specialtyTwo}"}},{ "c_medicalServices.name20":{ "$contains": "${specialtyTwo}"}}]}&limit=5&offset=0`;


// function getLocations() {
//   return fetch(locationsUrlTwo)
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

// getLocations().then((data) => {
//   console.log('l2: ',data);

//   var locationsArray = data.response.entities;
//   for (let i = 0; i < locationsArray.length; i++) {
//     var location = locationsArray[i];
//    // console.log('locations :', location);

//     var locationName = location.name;
//     // console.log('lname',locationName);

//     var photo = location.c_heroSectionPhoto.url;
//     // console.log('photo', photo);

//     $('.locations-container-two').append(
//       `<p>${locationName}</p>
//       <p><img src="${photo}" style="width: 150px; height: auto"/></p>
//       `
//     );
//   }
// });

// Groups 
var careTeam = 'PhysicalMedicine';
var conditionsTreated = 'Upper+Extremity+%28Shoulder%29';

var careTeamUrl = `https://liveapi.yext.com/v2/accounts/me/entities?api_key=ac4b14f3bd0d47fff1c80737d8202916&v=20210801&sortBy=[{"lastName":"ASCENDING"}]&offset=0&limit=50&filter={"$or":[{"c_answersKeywords":{"$eq":"${careTeam}"}}]}`;

var conditionsTreatedUrl = `https://liveapi.yext.com/v2/accounts/me/entities?api_key=ac4b14f3bd0d47fff1c80737d8202916&v=20210801&sortBy=[{"lastName":"ASCENDING"}]&offset=0&limit=50&filter={"$or":[{"conditionsTreated":{"$eq":"${conditionsTreated}"}}]}`;

function getCareTeam() {
  return fetch(careTeamUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

getCareTeam().then((data) => {
  console.log('st', data);
  var providerArray = data.response.entities;
  for (let i = 0; i < providerArray.length; i++) {
    var providers = providerArray[i];
    console.log('d',providers);

    var active = providers.c_activeOnAnswers;
    var na = providers.c_activeOnAnswers;
    if (na == false) {
      console.count('na', na);
    }
    console.log('active', providers.c_activeOnAnswers);
    if (active == true) {
      console.count('closed', active);
      //console.log('displayMe',active)
      var name = providers.name;

      var headshot = providers.c_heroSectionPhoto.url;

      var specialtyOneTitle = providers.c_primaryProviderspecialtyOne;
      var jobTitle = providers.c_positions;

      var profileUrl = providers.c_baseWebsite;

      $('.shoulders-container').append(
        `<div class="shoulder-card">
                            <div class="top">
                                <img src="${headshot}" />          
                                <div class="info">
                                    <p> <span> <a target="_blank" href= ${profileUrl}>${name}</a></span><p>
<p>${jobTitle}</p>
                                </div>
                        </div>`
      );
    }
  }
});

function getConditionsTreated() {
  return fetch(conditionsTreatedUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

getConditionsTreated().then((data) => {
  console.log('st', data);
  var providerArray = data.response.entities;
  for (let i = 0; i < providerArray.length; i++) {
    var providers = providerArray[i];
    console.log('d',providers);

    var active = providers.c_activeOnAnswers;
    var na = providers.c_activeOnAnswers;
    if (na == false) {
      console.count('na', na);
    }
    console.log('active', providers.c_activeOnAnswers);
    if (active == true) {
      console.count('closed', active);
      //console.log('displayMe',active)
      var name = providers.name;

      var headshot = providers.c_heroSectionPhoto.url;

      var specialtyOneTitle = providers.c_primaryProviderspecialtyOne;
      var jobTitle = providers.c_positions;

      var profileUrl = providers.c_baseWebsite;

      $('.conditions-treated-container').append(
        `<div class="shoulder-card">
                            <div class="top">
                                <img src="${headshot}" />          
                                <div class="info">
                                    <p> <span> <a target="_blank" href= ${profileUrl}>${name}</a></span><p>
<p>${jobTitle}</p>
                                </div>
                        </div>`
      );
    }
  }
});

// All providers in a specialtyOne
var providerspecialtyOne = 'Obstetrics+%26+Gynecology';
var providerSubspecialtyOne = 'Asthma';
var providerspecialtyOneUrl = `https://liveapi.yext.com/v2/accounts/me/entities?api_key=ac4b14f3bd0d47fff1c80737d8202916&v=20210801&filter={"$or":[{"c_answersspecialtyOne":{"$eq":"${providerspecialtyOne}"}}]}&filter={"$or":[{"c_answerssubspecialtyOne":{"$eq":"${providerSubspecialtyOne}"}}]}&filter={"c_activeOnAnswers":{"$eq":true}}&offset=0&limit=50`;


var subspecialtyOneUrl = `https://liveapi.yext.com/v2/accounts/me/entities?api_key=ac4b14f3bd0d47fff1c80737d8202916&v=20210801&filter={"$or":[{"c_answerssubspecialtyOne":{"$eq":"${providerSubspecialtyOne}"}}]}&sortBy=[{"lastName":"ASCENDING"}]&offset=0&limit=5`

function getProvidersByspecialtyOne() {
  return fetch(subspecialtyOneUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

getProvidersByspecialtyOne().then((data) => {
  console.log('data', data);
  var providerArray = data.response.entities;
  for (let i = 0; i < providerArray.length; i++) {
    var providers = providerArray[i];
    // console.log('d',providers);

    var active = providers.c_activeOnAnswers;
    var na = providers.c_activeOnAnswers;
    if (na == false) {
      // console.count('na', na);
    }
    console.log('active', providers.c_activeOnAnswers);
    if (active == true) {
      // console.count('closed', active);
      //console.log('displayMe',active)
      var name = providers.name;

      var headshot = providers.c_heroSectionPhoto.url;

      var specialtyOneTitle = providers.c_primaryProviderspecialtyOne;
      var jobTitle = providers.c_positions;

      var profileUrl = providers.c_baseWebsite;

      $('.providers-container').append(
        `<div class="provider-card">
                            <div class="top">
                                <img src="${headshot}" />          
                                <div class="info">
                                    <p> <span> <a target="_blank" href= ${profileUrl}>${name}</a></span><p>
<p>${jobTitle}</p>
                                </div>
                        </div>`
      );
    }
  }
});
