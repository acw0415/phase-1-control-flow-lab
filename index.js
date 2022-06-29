function scuberGreetingForFeet(feet){
  let distanceInFeet = feet;
  let charge;
  if(distanceInFeet < 400){
    charge = 0;
    return "This one is on me!"
  }
    else if(distanceInFeet >= 400 && distanceInFeet <= 2000){
    charge = 20;
    return "That will be twenty bucks."
  }
    else if(distanceInFeet >= 2000 && distanceInFeet <= 2500){
    charge = 30;
    return "I will gladly take your thirty bucks."
  }
    else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city == "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":  
    return "Thank you so much.";  
      break;
    case "not as generous":  
    return "Thank you.";   
      break;
    default:  
    return "Bye.";   
    
  }
}