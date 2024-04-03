window.onload = function() {
    // Get canvas and image elements
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const originalImg = document.getElementById('originalImg');

    // Draw original image on canvas
    ctx.drawImage(originalImg, 0, 0, canvas.width, canvas.height);

    // Get image data from canvas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Convert image to black and white
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
    }
    ctx.putImageData(imageData, canvas.width, 0);

    // Convert image to sepia
    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        data[i] = Math.min(255, 0.393 * red + 0.769 * green + 0.189 * blue);
        data[i + 1] = Math.min(255, 0.349 * red + 0.686 * green + 0.168 * blue);
        data[i + 2] = Math.min(255, 0.272 * red + 0.534 * green + 0.131 * blue);
    }
    ctx.putImageData(imageData, canvas.width * 2, 0);
};
