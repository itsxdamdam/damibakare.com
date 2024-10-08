let elements = document.querySelectorAll(".text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for(let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;

    span.classList.add("letter");
    textContainer.appendChild(span);
  }
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));

});

// Replace key_live_YOUR_KEY_GOES_HERE with your Branch Key (live version)
branch.init("key_live_nxo5ohAr97tTai4YkqltPogiDrfs3UEP", function(err, data) {
	console.log(err, data);
});
