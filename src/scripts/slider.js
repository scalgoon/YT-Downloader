const slider = document.getElementById("quality");

slider.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    let progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #9b9b9b ${progress}%, hsl(0, 0%, 78%) ${progress}%`;
})