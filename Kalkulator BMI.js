function hitungBMI() {
  var jenis_kelamin = document.getElementById("jenis_kelamin").value;
  var berat_badan = document.getElementById("berat_badan").value;
  var usia = document.getElementById("usia").value;
  var tinggi_badan = document.getElementById("tinggi_badan").value;

  var bmi = berat_badan / ((tinggi_badan/100) * (tinggi_badan/100));

  if (jenis_kelamin == "pria") {
    var bmi_min = 20.7 - (0.1 * usia);
    var bmi_max = 26.4 - (0.1 * usia);
  } else {
    var bmi_min = 19.1 - (0.1 * usia);
    var bmi_max = 25.8 - (0.1 * usia);
  }

  document.getElementById("hasil").innerHTML = "BMI Anda adalah " + bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById("hasil").innerHTML += "<br>Anda termasuk kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("hasil").innerHTML += "<br>Anda termasuk normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("hasil").innerHTML += "<br>Anda termasuk kelebihan berat badan";
} else if (bmi >= 30.0 && bmi >= 30.0) {
    document.getElementById("hasil").innerHTML += "<br>Anda termasuk kegemukan (Obesitas)";
}
}

function clearBMI() {
location.reload();
}