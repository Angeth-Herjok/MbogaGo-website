let locations = document.getElementById('my-location')
function getLocation (){
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=6f62c111289b4a94a74bc75122ae2d84')
    .then(response => response.json())
    .then(response => {
        console.log({response});
       locations.innerHTML+= JSON.stringify(response)
    })
    .catch(error=> new Error(error.message))
}
getLocation();
