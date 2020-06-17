$(document).ready(function(){
  var mask = document.querySelector("#pageMask");
  
  var modalReq = document.querySelector("#modalRequest");
  var ModalSendStatic = document.querySelector("#modalSendStatic");
  var modalSend = document.querySelector("#modalSend")
  var modalTerms = document.querySelector("#modalTerms")
  var modalContract = document.querySelector("#modalContract");
  var modalReceive = document.querySelector("#modalReceive")

  var openReq = document.querySelector("#open-request-modal");
  var closeReq = document.querySelector("#close-button");

  var openSendStatic = document.querySelector("#open-sendst-modal");
  var closeSendStatic = document.querySelector("#close-button-sendst");

  var openSend = document.querySelector("#open-send-modal");
  var closeSend = document.querySelector("#close-button-send");

  var openTerms = document.querySelector("#open-terms-modal");
  var closeTerms = document.querySelector("#close-button-terms");

  var openContract = document.querySelector("#open-contract-modal");
  var closeContract = document.querySelector("#close-button-contract");

  var openReceive = document.querySelector("#open-receive-modal");
  var closeReceive = document.querySelector("#close-button-rec");

// Each modal has to be closed individually at first to prevent bugs
  modalReq.classList.toggle("closed");
  ModalSendStatic.classList.toggle("closed");
  modalSend.classList.toggle("closed");
  modalTerms.classList.toggle("closed");
  modalContract.classList.toggle("closed");
  modalReceive.classList.toggle("closed");
  mask.classList.toggle("closed");

// Function to open & close request modal
  closeReq.addEventListener("click", function() {
    modalReq.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openReq.addEventListener("click", function() {
    modalReq.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to open & close receive modal
  closeSendStatic.addEventListener("click", function() {
    ModalSendStatic.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openSendStatic.addEventListener("click", function() {
    ModalSendStatic.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to open & close send modal
  closeSend.addEventListener("click", function() {
    modalSend.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openSend.addEventListener("click", function() {
    modalSend.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to open & close terms modal
  closeTerms.addEventListener("click", function() {
    modalTerms.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openTerms.addEventListener("click", function() {
    modalTerms.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to open & close contract modal
  closeContract.addEventListener("click", function() {
    modalContract.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openContract.addEventListener("click", function() {
    modalContract.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to open & close data receive modal
  closeReceive.addEventListener("click", function() {
    modalReceive.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openReceive.addEventListener("click", function() {
    modalReceive.classList.toggle("closed");
    mask.classList.toggle("closed");
  });
});