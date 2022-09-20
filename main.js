function klikk(){
    let cm=parseFloat(document.getElementById('cm').value);
    let kg=parseFloat(document.getElementById('kg').value);
    let bmi=kg / (cm / 100) ** 2;
    document.getElementById('bmi').textContent=bmi;
}
document.getElementById('bmi').addEventListener('change',klikk);
document.getElementById('kg').addEventListener('change',klikk);
document.getElementById('szamitas').addEventListener('click',klikk);