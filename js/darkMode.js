const root = document.documentElement;
let darkMode = (localStorage.getItem("darkMode") === "true");
if(darkMode == true){
    darkMode = false;
    document.getElementById("toogleBtn").click();
}

function toogleDarkMode(){
    if(darkMode == false){
        root.style.setProperty("--site-background", "#272727");
        root.style.setProperty("--site-textColor", "whiteSmoke");
        root.style.setProperty("--site-textMuted", "rgba(255, 255, 255, 0.75)");
        root.style.setProperty("--site-elemBorder", "rgba(255, 255, 255, 0.25)");
        root.style.setProperty("--site-contrast", "rgba(50, 50, 50, 1)");
        darkMode = true;
    }
    else{
        root.style.setProperty("--site-background", "whiteSmoke");
        root.style.setProperty("--site-textColor", "black");
        root.style.setProperty("--site-textMuted", "rgba(0, 0, 0, 0.75)");
        root.style.setProperty("--site-elemBorder", "rgba(0, 0, 0, 0.25)");
        root.style.setProperty("--site-contrast", "rgba(220, 220, 235, 1)");
        darkMode = false;
    }
    localStorage.setItem("darkMode", darkMode);
}