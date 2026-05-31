/**
 * Maps hex color codes to human-readable names using RGB Euclidean distance.
 */
export function getColorName(hex: string | undefined | null): string {
  if (!hex) return "";
  const cleaned = hex.trim();

  // If it's already a non-hex word name (e.g. "White & Mustard", "Emerald Green"), return it capitalized
  if (/^[a-z\s&\-]+$/i.test(cleaned) && !/^[0-9A-F]{3,8}$/i.test(cleaned)) {
    return cleaned
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  // If it is a list of comma-separated colors, split and parse them
  if (cleaned.includes(",")) {
    return getCombinedColorName(cleaned.split(","));
  }

  // Ensure it starts with #
  const hexStr = cleaned.startsWith("#") ? cleaned : `#${cleaned}`;
  const cleanedHex = hexStr.replace("#", "").toUpperCase();

  // Predefined standard coordinates
  const colorMap: { [name: string]: [number, number, number] } = {
    "White": [255, 255, 255],
    "Black": [0, 0, 0],
    "Red": [255, 0, 0],
    "Green": [0, 255, 0],
    "Blue": [0, 0, 255],
    "Yellow": [255, 255, 0],
    "Orange": [255, 165, 0],
    "Grey": [128, 128, 128],
    "Brown": [139, 69, 19],
    "Purple": [128, 0, 128],
    "Pink": [255, 192, 203],
    "Baby Pink": [255, 182, 193],
    "Mustard": [227, 172, 14],
    "Gold": [255, 215, 0],
    "Beige": [245, 245, 220],
    "Off-White": [250, 235, 215],
    "Navy": [0, 0, 128],
    "Teal": [0, 128, 128],
    "Olive": [128, 128, 0],
    "Maroon": [128, 0, 0],
    "Indigo": [75, 0, 130],
    "Sky Blue": [135, 206, 235],
    "Peach": [255, 218, 185],
    "Lavender": [230, 230, 250],
    "Cream": [255, 253, 208],
    "Khaki": [240, 230, 140],
    "Charcoal": [54, 69, 79],
    "Burgundy": [128, 0, 32],
    "Coral": [255, 127, 80],
    "Mint": [189, 252, 201],
    "Turquoise": [64, 224, 208],
  };

  // Convert hex to RGB
  let r = 0, g = 0, b = 0;
  if (cleanedHex.length === 3) {
    r = parseInt(cleanedHex[0] + cleanedHex[0], 16);
    g = parseInt(cleanedHex[1] + cleanedHex[1], 16);
    b = parseInt(cleanedHex[2] + cleanedHex[2], 16);
  } else if (cleanedHex.length === 6) {
    r = parseInt(cleanedHex.slice(0, 2), 16);
    g = parseInt(cleanedHex.slice(2, 4), 16);
    b = parseInt(cleanedHex.slice(4, 6), 16);
  } else {
    // Fallback if not a standard hex length
    return cleaned;
  }

  // Find closest Euclidean distance
  let closestName = "Custom Color";
  let minDistance = Infinity;

  for (const [name, rgb] of Object.entries(colorMap)) {
    const distance = Math.sqrt(
      Math.pow(r - rgb[0], 2) +
      Math.pow(g - rgb[1], 2) +
      Math.pow(b - rgb[2], 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestName = name;
    }
  }

  return closestName;
}

/**
 * Combines an array of colors (e.g. ['#FFFFFF', '#FFC0CB']) into a single mixed color name (e.g. "White & Pink").
 */
export function getCombinedColorName(colours: string[] | undefined | null): string {
  if (!colours || colours.length === 0) return "";
  
  const names = colours
    .map(c => getColorName(c))
    .filter((v, i, self) => v && self.indexOf(v) === i);
    
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
}
