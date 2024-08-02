document.addEventListener("DOMContentLoaded", function () {
  const photo = document.getElementById("photo");
  const uploadInput = document.getElementById("upload");

  const isoSlider = document.getElementById("iso");
  const isoValue = document.getElementById("isoValue");

  const shutterSlider = document.getElementById("shutter");
  const shutterValue = document.getElementById("shutterValue");

  const apertureSlider = document.getElementById("aperture");
  const apertureValue = document.getElementById("apertureValue");

  isoSlider.addEventListener("input", updatePhoto);
  shutterSlider.addEventListener("input", updatePhoto);
  apertureSlider.addEventListener("input", updatePhoto);
  uploadInput.addEventListener("change", handleImageUpload);

  function updatePhoto() {
    const iso = isoSlider.value;
    const shutter = shutterSlider.value;
    const aperture = apertureSlider.value;

    isoValue.textContent = iso;
    shutterValue.textContent = `1/${shutter}`;
    apertureValue.textContent = aperture;

    const brightness = calculateBrightness(iso, shutter, aperture);
    photo.style.filter = `brightness(${brightness}%)`;
  }

  function calculateBrightness(iso, shutter, aperture) {
    // Простий алгоритм для симуляції зміни яскравості
    const isoFactor = iso / 100;
    const shutterFactor = 1 / shutter;
    const apertureFactor = 1.4 / aperture;

    return isoFactor * shutterFactor * apertureFactor * 100;
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photo.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
});
