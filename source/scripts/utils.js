export function getAverageColor(imageElement) {
  const blockSize = 5;
  const color = { r: 0, g: 0, b: 0 };
  const canvas = document.createElement("canvas");
  const context =
    canvas.getContext && canvas.getContext("2d", { willReadFrequently: true });

  if (!context) return color;

  const width = imageElement.naturalWidth || imageElement.width;
  const height = imageElement.naturalHeight || imageElement.height;
  canvas.width = width;
  canvas.height = height;

  context.drawImage(imageElement, 0, 0);

  try {
    const imageData = context.getImageData(0, 0, width, height).data;
    let count = 0;

    for (let i = 0; i < imageData.length; i += blockSize * 4) {
      color.r += imageData[i];
      color.g += imageData[i + 1];
      color.b += imageData[i + 2];
      count++;
    }

    return {
      r: Math.round(color.r / count),
      g: Math.round(color.g / count),
      b: Math.round(color.b / count),
    };
  } catch (error) {
    console.error(error);
    return color;
  }
}
