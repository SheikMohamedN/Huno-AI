function sendMessage() {

  let text =
    document.getElementById("msg").value;

  document.getElementById("output")
    .innerText = text;
}