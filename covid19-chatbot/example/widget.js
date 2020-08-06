var menuBtn=document.getElementById("covidBtn");
        var sideNav=document.getElementById("covid");
        sideNav.style.display = "none"
        menuBtn.onclick=function(){
            if (sideNav.style.display == "none") {
            sideNav.style.display = "block";
            }
            else{
                sideNav.style.display="none";
            }
        }