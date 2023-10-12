
function closeSidebar(){ //Closes the sidebar by setting all the elements display to none
    document.getElementById("transparent-overlay").style.display = "none"; 
    document.getElementById("x-button").style.display = "none";
    sidebarArray=document.getElementsByClassName("sidebar"); //Loop through all the elments with this class
    for (var i = 0; i < sidebarArray.length; i++){
        sidebarArray[i].style.display = "none";
    }
}
function openSidebar(){//Close sidebar in reverse
    document.getElementById("transparent-overlay").style.display = "block"; 
    document.getElementById("x-button").style.display = "block";
    sidebarArray=document.getElementsByClassName("sidebar"); //Loop through all the elments with this class
    for (var i = 0; i < sidebarArray.length; i++){
        sidebarArray[i].style.display = "flex";
    }
}