// Random Activity Functions

function getRandomActivity(){
    axios.request({
        url: `http://www.boredapi.com/api/activity/`,
        method: `GET`
    }).then(activitySuccess).catch(activityFailure);
}

function activitySuccess(response){
    clearSearch();
    let activity = response.data.activity;
    activityResult.insertAdjacentHTML(`beforeend`, `<h2>${activity}</h2>`);
}

function activityFailure(error){
    console.log(error);
}

function clearSearch(){
    activityResult.innerHTML = ``;
}

// Choose Activity by Type Functions

function getTypeActivity(){
    axios.request({
        url: `http://www.boredapi.com/api/activity?type`,
        method: `GET`,
        params: {
            // I could not get multiple searches, I tried [i] to get current input chosen but it didn't work
            // I tried putting multiple values, nothing would work. Tried converting this named group to an Array but didnt get it
            // so currently the radio buttons all search for value[0] which is Education
            type: type[0].value,
        }
    }).then(typeActivitySuccess).catch(activityFailure);
}

function typeActivitySuccess(response){
    clearSearch();
    let data = response.data.activity;
    if(education.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(recreational.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(social.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(diy.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(charity.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(cooking.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(relaxation.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(music.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    } else if(busywork.checked==true){
        activityResult.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
    }
}

let activityResult = document.getElementById(`activityResult`);

// for choosing specific 'Type' of activity

// grabbing elements by name, I used the name attribute in my inputs
let type = document.getElementsByName(`type`);

let education = document.getElementById(`educationType`);
let recreational = document.getElementById(`recreationalType`);
let social = document.getElementById(`socialType`);
let diy = document.getElementById(`diyType`);
let charity = document.getElementById(`charityType`);
let cooking = document.getElementById(`cookingType`);
let relaxation = document.getElementById(`relaxationType`);
let music = document.getElementById(`musicType`);
let busywork = document.getElementById(`busyworkType`);

// Event Listeners
document.getElementById(`randomSubmit`).addEventListener(`click`, getRandomActivity);
document.getElementById(`typeSubmit`).addEventListener(`click`, getTypeActivity);