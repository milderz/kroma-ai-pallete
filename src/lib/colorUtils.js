export function getContrastTextColor(hex) {
  const cleanHex = hex.replace("#", "");

  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const transform = (c) =>
    c <= 0.03928
      ? c / 12.92
      : Math.pow((c + 0.055) / 1.055, 2.4);

  const R = transform(r);
  const G = transform(g);
  const B = transform(b);

  const luminance =
    0.2126 * R +
    0.7152 * G +
    0.0722 * B;

  return luminance > 0.5 ? "#1F2937" : "#F9FAFB";
}
