$(document).ready(function(){
  var mask = document.querySelector("#pageMask");
  
  var modalReq = document.querySelector("#modalRequest");
  var modalRec = document.querySelector("#modalReceive");
  var modalSend = document.querySelector("#modalSend")
  var modalTerms = document.querySelector("#modalTerms")
  var modalContract = document.querySelector("#modalContract");

  var openReq = document.querySelector("#open-request-modal");
  var closeReq = document.querySelector("#close-button");

  var openRec = document.querySelector("#open-receive-modal");
  var closeRec = document.querySelector("#close-button-rec");

  var openRec = document.querySelector("#open-receive-modal");
  var closeRec = document.querySelector("#close-button-rec");

  var openSend = document.querySelector("#open-send-modal");
  var closeSend = document.querySelector("#close-button-send");

  var openTerms = document.querySelector("#open-terms-modal");
  var closeTerms = document.querySelector("#close-button-terms");

  var openContract = document.querySelector("#open-contract-modal");
  var closeContract = document.querySelector("#close-button-contract");

// Each modal has to be closed individually at first to prevent bugs
  modalReq.classList.toggle("closed");
  modalRec.classList.toggle("closed");
  modalSend.classList.toggle("closed");
  modalTerms.classList.toggle("closed");
  modalContract.classList.toggle("closed");
  mask.classList.toggle("closed");

// Function to close request modal
  closeReq.addEventListener("click", function() {
    modalReq.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openReq.addEventListener("click", function() {
    modalReq.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to close receive modal
  closeRec.addEventListener("click", function() {
    modalRec.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openRec.addEventListener("click", function() {
    modalRec.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to close send modal
  closeSend.addEventListener("click", function() {
    modalSend.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openSend.addEventListener("click", function() {
    modalSend.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to close terms modal
  closeTerms.addEventListener("click", function() {
    modalTerms.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openTerms.addEventListener("click", function() {
    modalTerms.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  // Function to close contract modal
  closeContract.addEventListener("click", function() {
    modalContract.classList.toggle("closed");
    mask.classList.toggle("closed");
  });

  openContract.addEventListener("click", function() {
    modalContract.classList.toggle("closed");
    mask.classList.toggle("closed");
  });
});