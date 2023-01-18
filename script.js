var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

// function modeOnOff(){} şeklinde isimlendirilip dark-btn class'inin yanina onclick="modeOnOff()" yazilarak da ayni islem yapilabilinirdi.

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    //localStorage value="light" ise "dark" yapar.

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }

    //geri kalan durumlarda(value="dark") ise "light" yapar.

    else{
        localStorage.setItem("theme", "light")
    }
}

// local storage kullanma prensibi;
// localStorage.setItem("theme", "dark"); //local storage "theme" value="dark" olarak belirler.
// localStorage.getItem("theme"); // local storage "theme" kontrol eder.

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light");
}