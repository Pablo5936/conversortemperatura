function convertir() {
  let centigrados = Number(document.getElementById('centigrados').value)
  let kelvin = centigrados + 273.15
  let farenheit = (centigrados * 9) / 5 + 32
  let rankine = ((centigrados + 273.15) * 9) / 5
  let reaumur = (centigrados * 4) / 5

  document.getElementById('kelvin').innerHTML = 'Grados Kelvin: ' + kelvin
  document.getElementById('farenheit').innerHTML =
    'Grados Farenheit: ' + farenheit
  document.getElementById('rankine').innerHTML = 'Grados Rankine: ' + rankine
  document.getElementById('reaumur').innerHTML = 'Grados Reaumur: ' + reaumur
}
