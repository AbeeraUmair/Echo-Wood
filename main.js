function menuToggle() {
    const menu = document.getElementById("sidebar");
    if (sidebar.style.display === "none" || menu.style.display === "") {
        sidebar.style.display = "block"; // Show the menu
    } else {
        sidebar.style.display = "none"; // Hide the menu
    }
}
