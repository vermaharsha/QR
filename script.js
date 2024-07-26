let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let errorBox = document.getElementById("errorBox");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    errorBox.classList.remove("show-error");
  } else {
    imgBox.classList.remove("show-img");
    errorBox.classList.add("show-error");

    setTimeout(function () {
      errorBox.classList.remove("show-error");
    }, 1500);
  }
}
