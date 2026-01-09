const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = "tel:+79856001792";
    } else {
      alert("Позвоните нам: +79856001792");
    }
  });
});
