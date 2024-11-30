export function getAverageRGB(imgElement) {
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB = { r: 0, g: 0, b: 0 };
  const canvas = document.createElement("canvas");
  const context = canvas.getContext && canvas.getContext("2d");

  if (!context) return defaultRGB;

  const {
    naturalWidth,
    naturalHeight,
    offsetWidth,
    offsetHeight,
    width,
    height,
  } = imgElement;
  canvas.width = naturalWidth || offsetWidth || width;
  canvas.height = naturalHeight || offsetHeight || height;

  context.drawImage(imgElement, 0, 0);

  try {
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const length = data.length;

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    for (let i = 0; i < length; i += blockSize * 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    // Use Math.round for more accurate rounding
    return {
      r: Math.round(r / count),
      g: Math.round(g / count),
      b: Math.round(b / count),
    };
  } catch (error) {
    console.error(error);
    return defaultRGB;
  }
}
