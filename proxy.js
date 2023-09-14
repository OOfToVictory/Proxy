javascript:(function() {
  var eltIF = document.createElement("iframe");
  eltIF.setAttribute("src", "https://internetunblocker.github.io/proxy.html");
  eltIF.style.position = "absolute";
  eltIF.style.top = "0";
  eltIF.style.left = "0";
  eltIF.style.width = "100%";
  eltIF.style.height = "100%";
  eltIF.style.zIndex = "9999";
  document.body.appendChild(eltIF);

  var userResponse = prompt("Where do you want the hide button? (Top left, Top right, Bottom left, or Bottom right)");

  if (userResponse !== null) {
    var button = document.createElement("button");
    button.textContent = "Hide Embed";
    button.style.position = "fixed";
    button.style.zIndex = "10000"; // Set a higher zIndex for the button
    button.addEventListener("click", function() {
      eltIF.style.display = "none";
    });

    switch (userResponse.toLowerCase()) {
      case "top left":
        button.style.top = "10px";
        button.style.left = "10px";
        break;
      case "top right":
        button.style.top = "10px";
        button.style.right = "10px";
        break;
      case "bottom left":
        button.style.bottom = "10px";
        button.style.left = "10px";
        break;
      case "bottom right":
        button.style.bottom = "10px";
        button.style.right = "10px";
        break;
      default:
        alert("Invalid choice. Please choose from: Top left, Top right, Bottom left, or Bottom right.");
        return;
    }

    document.body.appendChild(button);
  }
})();