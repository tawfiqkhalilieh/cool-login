const btn = document.getElementById("btn");
btn.addEventListener("mouseover", () => {
  if (
    document.getElementById("name").value === "" &&
    document.getElementById("pass").value === ""
  ) {
    return btn.classList.contains("a")
      ? btn.classList.remove("a")
      : btn.classList.add("a");
  }
});

btn.addEventListener("click", () => {
  if (
    document.getElementById("name").value === "" &&
    document.getElementById("pass").value === ""
  ) {
    return btn.classList.contains("a")
      ? btn.classList.remove("a")
      : btn.classList.add("a");
  }
  alert("Logged in successfuly");
});
