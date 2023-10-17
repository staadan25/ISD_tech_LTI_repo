//i have no idea what i'm doing
function openaccordion(){
    var panelclass = document.getElementsByClassName("panel");
    for (var i=0; i < panelclass.length; i++){
            let newbutton = document.createElement("button");
            document.getElementById("buttonhouse").appendChild(newbutton);
            newbutton.classList.add("childbutton");
            newbutton.textContent="MORE"
            newbutton.setAttribute("onclick","openaccordion()")
            newbutton.style.backgroundColor="rgb("+String(Math.random() *255)+","+String(Math.random() *255)+","+String(Math.random() *255)+")"
        }
    }
