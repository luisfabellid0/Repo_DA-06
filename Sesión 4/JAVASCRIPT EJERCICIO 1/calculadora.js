const formulario = document.getElementById('formulario');
const montoInput = document.getElementById('monto');
const porcentajeInput = document.getElementById('porcentaje');
const calcularButton = document.getElementById('calcular');
const resultadoP = document.getElementById('resultado');

function calcularPropina(monto, porcentaje) {
    const propina = (monto * porcentaje) / 100;
    const total = monto + propina;
    return { propina, total };
}

calcularButton.addEventListener('click', (e) => {
    e.preventDefault();
    const monto = parseFloat(montoInput.value);
    const porcentaje = parseFloat(porcentajeInput.value);
    const { propina, total } = calcularPropina(monto, porcentaje);
    resultado.innerText = `Propina: S/. ${propina.toFixed(2)} | Total a pagar: S/. ${total.toFixed(2)}`;
});