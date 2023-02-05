function radio() {
  receptacle = document.getElementById("receptacle");
  outlet = document.getElementById("outlet");
  resistiveload = document.getElementById("resistiveload");
  if (resistiveload.checked) {
    receptacle.checked;
  } else {
    document.getElementsByName(resistive).unchecked;
  }
}
