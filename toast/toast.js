
var toast = document.getElementById("myToast");
var btn = document.getElementById("myBtn");


btn.onclick = getToast = () => {
  toast.style.visibility = "visible"
  setTimeout( () => { toast.style.visibility = "hidden"}, 3000);
}

