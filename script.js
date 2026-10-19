(function () {
    document.getElementById("ex1_button")?.addEventListener("click", () => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
            numbers.push(i);
        }
        document.getElementById("ex1_content").textContent = numbers.join(",");
    })

    const inputField = document.getElementById("ex2_text");
    inputField?.addEventListener("input", () => {
        const text = inputField.value;
        let error;
        if(text.length !== 9) {
            error = "Długość numeru musi być równa 9";
        }
        else if (/\p{L}/u.test(text)) {
            error = "Numer nie może zawierać liter"
        }
        else if (/\D/.test(text)) {
            error = "Numer nie może zawierać znaków specjalnych"
        }
        else {
            error = "Numer telefonu jest poprawny"
        }
        document.getElementById("ex2_content").textContent = error;
    })
})();