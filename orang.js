

let orangAPI = "https://randomuser.me/api/?"

let APIresponse;

function fetchPersonAPI(){

    let reqNumResults = "results=" + document.getElementById("person-num").value;

    fetch(orangAPI+reqNumResults)
        .then( res => res.text())
        .then( res => APIresponse = JSON.parse(res))

}

function showPersonData(){

    let dataOrang = [...APIresponse.results]

    let indeks = 0

    let barisData = dataOrang.map((e)=>{

        indeks++;

        return(
        `<tr>
            <td>${indeks}</td>
            <td><img src="${e.picture.large}"></td>
            <td>${e.name.first + " " + e.name.last}</td>
            <td>${e.gender}</td>
            <td>${e.email}</td>
            <td>${e.cell}</td>
        </tr>`)
    }).reduce((a,b) => a+b)

    document.getElementById("person-table").innerHTML = barisData

}

fetchPersonAPI()

document.getElementById("person-num").oninput = function () {

}

function toggleMobNav(){

    let bottomvalue = document.getElementById("mobile-nav").style.bottom;

    if (bottomvalue === "-40%"){
        document.getElementById("mobile-nav").style.bottom = "0%";
    }else{
        document.getElementById("mobile-nav").style.bottom = "-40%";
    }
}





