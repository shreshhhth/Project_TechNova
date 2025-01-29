document.addEventListener("DOMContentLoaded", function () {
    const minicircle = document.getElementById("minicircle");
    const hoverElements = document.querySelectorAll(".main"); // Select elements you want to outline

    document.addEventListener("mousemove", (e) => {
        minicircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("outlined");
        });
        element.addEventListener("mouseleave", () => {
            element.classList.remove("outlined");
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const serviceElements = document.querySelectorAll(".elem");

    serviceElements.forEach((elem) => {
        const img = elem.querySelector("img");

        elem.addEventListener("mouseenter", (e) => {
            img.classList.add("follow");
            positionImage(e, img, elem);
        });

        elem.addEventListener("mousemove", (e) => {
            positionImage(e, img, elem);
        });

        elem.addEventListener("mouseleave", () => {
            img.classList.remove("follow");
            img.style.transform = "translate(0, 0)";
        });

        function positionImage(e, img, container) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - img.width / 2; // Centering horizontally
            const y = e.clientY - rect.top - img.height / 2; // Centering vertically

            img.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});


