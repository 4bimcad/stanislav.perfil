document.getElementById("copyLink").addEventListener("click", function () {
    let currentURL = window.location.href;
    let toast = document.getElementById("toast");

    navigator.clipboard.writeText(currentURL).then(() => {
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 2000);
    }).catch(err => {
        console.error("Ошибка копирования", err);
    });
});