export default function lightenDarkenColor(
  color: string,
  amount: number
): string {
  let usePound = false;

  if (color.startsWith("#")) {
    color = color.slice(1);
    usePound = true;
  }

  // Validate hex string (must be 6 characters)
  if (color.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(color)) {
    console.warn("Invalid hex color:", color);
    return usePound ? "#000000" : "000000";
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  const result =
    (usePound ? "#" : "") +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();

  return result;
}
