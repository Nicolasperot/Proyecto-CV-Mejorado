//BOTÓN Y CARTA

document.getElementById("show-card-btn").addEventListener("click", function(){
    var receiverName = document.getElementById("receiver-name").value;
    document.getElementById("receiver-span").innerHTML = receiverName;
    var card = document.getElementById("card");
    if (card.style.display === "none") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  

