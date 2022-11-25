function getActivity(){
    axios.request({
        url: `http://www.boredapi.com/api/activity/`,
        method: `GET`,
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

// setting variable up so I don't repeat
let activityResult = document.getElementById(`activityResult`);

document.getElementById(`randomSubmit`).addEventListener(`click`, getActivity);