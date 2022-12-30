// Set RefreshRate to reload page every hour
let RefreshRate = 1*60*60*1000; 


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function UpdateStatus() {
    let loadTime = new Date();
    let loadTimeStr = loadTime.toLocaleTimeString();
    console.log('UpdateStatus executed! '+loadTime);
    sleep(RefreshRate).then(() => {
        window.location.reload();
        let reloadTime = new Date();
        let reloadTimeStr = Now.toLocaleTimeString();
        console.log('Window reloaded '+reloadTimeStr);
    })
}

// console.log('JS file loaded and executed');

window.addEventListener("load", UpdateStatus, false);