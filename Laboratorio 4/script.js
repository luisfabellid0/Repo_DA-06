function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === "") return "Selecciona al menos un tipo de carácter.";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById("passwordOutput").textContent = password;
});
