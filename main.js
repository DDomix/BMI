function szamitas(){
    let magassag = parseFloat(document.getElementById("cm").value);
    let suly = parseFloat(document.getElementById("kg").value);
   
    let ered = suly / (magassag / 100) ** 2;
   
    document.getElementById("eredmeny").textContent = ered;
}
document.getElementById('bmi').addEventListener('change',szamitas);
document.getElementById('kg').addEventListener('change',szamitas);
document.getElementById('szamitas').addEventListener('click',szamitas);