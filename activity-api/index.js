function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.boredapi.com/api/activity/");
    xhr.onload = function(){
        const data = JSON.parse(xhr.response);
        document.getElementById("title").innerText = data.activity;
    }
    xhr.onerror = function(){
        console.log("Sorry for this error!");
    }
    xhr.send();
}
loadData();
// window.setInterval(loadData, 10000);