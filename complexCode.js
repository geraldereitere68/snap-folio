// filename: complexCode.js

/**
 * This complex code demonstrates the implementation of a color blending algorithm.
 * It takes two input colors and blends them together using various color spaces and mathematical calculations.
 * The resulting color is then displayed on the screen.
 */

// Utility functions for converting between different color spaces
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * ((g - b) / (max - min)) + 0;
  } else if (max === g) {
    h = 60 * ((b - r) / (max - min)) + 120;
  } else if (max === b) {
    h = 60 * ((r - g) / (max - min)) + 240;
  }

  l = (max + min) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = (max - min) / (2 * l);
  } else {
    s = (max - min) / (2 - 2 * l);
  }

  return [h, s * 100, l * 100];
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Color blending function
function blendColors(color1, color2, blendFactor) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const hsl1 = rgbToHsl(rgb1.r, rgb1.g, rgb1.b);
  const hsl2 = rgbToHsl(rgb2.r, rgb2.g, rgb2.b);

  const blendedHsl = [
    (hsl1[0] + (hsl2[0] - hsl1[0]) * blendFactor) % 360,
    hsl1[1] + (hsl2[1] - hsl1[1]) * blendFactor,
    hsl1[2] + (hsl2[2] - hsl1[2]) * blendFactor
  ];

  const blendedRgb = hslToRgb(blendedHsl[0], blendedHsl[1], blendedHsl[2]);

  return rgbToHex(blendedRgb);
}

// Conversion functions for RGB and HEX formats
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function rgbToHex(rgb) {
  return (
    "#" +
    ((1 << 24) | (rgb[0] << 16) | (rgb[1] << 8) | rgb[2])
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
}

// Example usage
const color1 = "#FF0000";
const color2 = "#0000FF";
const blendFactor = 0.5;

const blendedColor = blendColors(color1, color2, blendFactor);

console.log("Blended Color:", blendedColor);
console.log("End of code.");