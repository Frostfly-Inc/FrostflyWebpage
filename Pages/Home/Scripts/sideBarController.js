var closeButton = document.querySelector(".closenavButton");
var sidePanel = document.querySelector(".sideBar");

let navOpen = localStorage.getItem("navBarOpen");
if (navOpen == "true") // Apply navigation bar state
{
    openSideBar();
} else {
    closeSideBar();
}

function toggleSideBar() // Toggle navigation bar
{
    var navOpen = localStorage.getItem("navBarOpen");
    if (navOpen == "false") // Appley navigation bar status
    {
        openSideBar();
    } else {
        closeSideBar();
    }
}
function openSideBar() {
    sidePanel.style.width = "150px";
    sidePanel.style.left = "0";
    localStorage.setItem("navBarOpen", true);
    closeButton.style.padding = "0 0 0 10px";
    closeButton.textContent = "×";
    closeButton.style.color = "rgb(167, 41, 41)";
}

function closeSideBar() {

    sidePanel.style.width = "0";
    sidePanel.style.left = "-150px";
    localStorage.setItem("navBarOpen", false);
    closeButton.style.padding = "0 0 0 170px";
    closeButton.textContent = "▣";
    closeButton.style.color = "rgb(0, 0, 0)";
}
toggleTheme(localStorage.getItem("pageTheme") == "false" ? false : true)
function toggleTheme(override = null) {
    var darkMode;
    if (override != null) {
        darkMode = override;
    }
    else {
        darkMode = localStorage.getItem("pageTheme") == "false" ? true : false; // Invert the current theme that is selected
    }
    localStorage.setItem("pageTheme", darkMode)

    document.body.className = darkMode ? "body darktheme" : "body";
}

function ReColorPng(png, color, blendMode) {
    var size = new (png.width, png.height);

    for (var y = 0; y < size.y; y++) {
        for (var x = 0; x < size.x; x++) {
            switch (blendMode) {
                case Addative:
                default:
                    png[y][x].color = png[y][x].color + color;  // Add color
                    break;
                case Subtractive:
                    png[y][x].color = png[y][x].color - color;  // Subtract color
                    break;
                case Multiplicative:
                    png[y][x].color = png[y][x].color * color;  // Multiply color
                    break
            }
        }
    }
    return png;
}