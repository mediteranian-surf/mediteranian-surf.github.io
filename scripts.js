function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Show less";
    } else {
        details.style.display = "none";
        button.textContent = "Show more";
    }
}
