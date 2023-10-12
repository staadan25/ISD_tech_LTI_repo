//These functions show and unshow the sidebar
function openSidebar(){
    document.getElementById("transparent-overlay").style.display="block";
    document.getElementById("x-button").style.display="block";
    var sidebarClass = document.getElementsByClassName("sidebar");
    for (var i=0; i < sidebarClass.length; i++){
        sidebarClass[i].style.display="flex";
    }
}
function closeSidebar(){
    document.getElementById("transparent-overlay").style.display="none";
    document.getElementById("x-button").style.display="none";
    var sidebarClass = document.getElementsByClassName("sidebar");
    for (var i=0; i < sidebarClass.length; i++){
        sidebarClass[i].style.display="none";
    }
}