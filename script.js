(function () {
    document.getElementById("ex1_button")?.addEventListener("click", () => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
            numbers.push(i);
        }
        document.getElementById("ex1_content").textContent = numbers.join(",");
    })
})();