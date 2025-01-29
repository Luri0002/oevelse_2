//konstant "tid", undersøger hvilken dato og tidspunkt det er lige nu
const tid = new Date().getHours();

function besked() {
  //hvis klokken er mindre end 5 -> godnat
  if (tid < 5) {
    console.log("Godnat");

    //hvis klokken er mere end 5, men mindre end 10 -> godmorgen
  } else if (tid < 10) {
    console.log("Godmorgen");

    //hvis klokken er mere end 10, men mindre end 18 -> goddag
  } else if (tid < 18) {
    console.log("Goddag");

    //hvis klokken er 18 eller mere -> godaften
  } else {
    console.log("Godaften");
  }
}

//kalder funktionen så den faktisk sker, da vi ikke bruger en ting som fx click eventlistener til at aktivere
besked();
