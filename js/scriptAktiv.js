/*
  GENERATE CARDS
*/

function generateCards(cardNumber, actualNumber){
  if (isNaN(cardNumber)) {
    return;
  }

  switch (actualNumber) {
    case 7:
      actualNumber = "KDT";
      break;
    case 8:
      actualNumber = "MA";
      break;
    case 9:
      actualNumber = "ME";
    default:

  }

  document.getElementById("cardSection").innerHTML += "<section class='container'>" +
                                                      "<div class='card card" + cardNumber + "' onclick='flip(" + cardNumber + ")'>" +
                                                      "<div class='front' id='front" + cardNumber + "'></div>" +
                                                      "<div class='back' id='back" + cardNumber + "'>" + actualNumber + "</div>" +
                                                      "</div>"+
                                                      "</section>";

switch (actualNumber) {
  case 1:
    document.getElementById("back" + cardNumber).style.background = "#CF0230";
    break;
  case 2:
    document.getElementById("back" + cardNumber).style.background = "#CF0230";
    break;
  case 3:
    document.getElementById("back" + cardNumber).style.background = "#4737A8";
    break;
  case 4:
    document.getElementById("back" + cardNumber).style.background = "#4737A8";
    break;
  case 5:
    document.getElementById("back" + cardNumber).style.background = "#F2B100";
    break;
  case 6:
    document.getElementById("back" + cardNumber).style.background = "#F2B100";
    break;
  default:
    document.getElementById("back" + cardNumber).style.background = "#ffffff";
    document.getElementById("back" + cardNumber).style.color = "#0E1217";
  }
}
