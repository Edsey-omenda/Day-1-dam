document.querySelector("#btn").addEventListener("click", sayMyName);

function sayMyName() {
  let entry = document.querySelector("#name").value
    let p = document.createElement("p");
    p.textContent = `hello ${entry} welcome to dam bootcamp`
  document.querySelector("#damjs").appendChild(p)
}