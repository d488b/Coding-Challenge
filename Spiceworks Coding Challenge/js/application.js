// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

$(document).ready(function(){
  displayData();

  $("button[type='submit']").on("click", addBox);
});

function addBox(e){
  //prevent default sending of data
  e.preventDefault();

  var nameVal = $("input[name='name']").val();
  var photoVal = $("input[name='photo_url']").val();
  var box = {
    name: nameVal,
    photo_url: photoVal
  };

  data.push(box);

  displayData();
}

function closeBox(e){

  var index = $(e.target).attr("data-index");

  data.splice(index, 1);

  displayData();
}

function displayData(){

  $("#container").empty();

  for (var i=data.length-1; i>=0; i--){

    var box = data[i];

    var src = (box.photo_url === "") ? "img/default.png" : box.photo_url;

    var html = "<div class='box'><div class='imageContainer'><img class='personImage' src='" + src + "'></div><p>" + box.name + "</p><img class='hidden' src='img/close.png' data-index=" + i + "></div>";

    $("#container").append(html);
  }

  $(".hidden").on("click", closeBox);

}


