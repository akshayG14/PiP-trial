console.log("JS loaded!!!");

const videoElement = document.getElementById("pip-video");
const button = document.getElementById("button");

// Prompt for selection of a media stream... pass to video element and then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("selectMediaStream Error: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disbale button when video playing
  button.style.pointerEvents = "none";
  // Start PiP
  await videoElement.requestPictureInPicture();
  // Reset button
  button.style.pointerEvents = "all";
});

// onInit
selectMediaStream();
