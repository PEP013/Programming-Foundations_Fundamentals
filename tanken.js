var tanken = "Premium"

switch (tanken) {
  case "Normaal":
    alert("Het bedrag is €1,35");
    break;
  case "Premium":
    alert("Het bedrag is €1,50");
    break;
  case "Diesel":
    alert("Het bedrag is €1,25");
    break;
  default:
    alert("Dit is niet geldig om te tanken")
    break;
}