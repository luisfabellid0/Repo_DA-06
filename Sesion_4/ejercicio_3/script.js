function generarContraseña(longitud, opciones = { mayusculas: true, minusculas: true, numeros: true, simbolos: true }) {
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let caracteres = '';
    if (opciones.mayusculas) caracteres += letrasMayusculas;
    if (opciones.minusculas) caracteres += letrasMinusculas;
    if (opciones.numeros) caracteres += numeros;
    if (opciones.simbolos) caracteres += simbolos;
    
    if (caracteres === '') {
        alert('Debe seleccionar al menos un tipo de carácter.');
        return '';
    }

    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }
    
    return contraseña;
}

document.getElementById('generarBtn').addEventListener('click', () => {
    const longitud = parseInt(document.getElementById('longitud').value);
    const opciones = {
        mayusculas: document.getElementById('mayusculas').checked,
        minusculas: document.getElementById('minusculas').checked,
        numeros: document.getElementById('numeros').checked,
        simbolos: document.getElementById('simbolos').checked
    };

    const contraseñaSegura = generarContraseña(longitud, opciones);
    document.getElementById('resultado').textContent = contraseñaSegura;

    if (contraseñaSegura) {
        document.getElementById('copiarBtn').classList.remove('hidden');
    } else {
        document.getElementById('copiarBtn').classList.add('hidden');
    }
});

document.getElementById('copiarBtn').addEventListener('click', () => {
    const contraseña = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(contraseña).then(() => {
        alert('Contraseña copiada al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar la contraseña: ', err);
    });
});
