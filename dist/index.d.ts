export type RGBColor = [number, number, number];

export interface ColorMap {
  /** The reduced color palette. */
  palette(): RGBColor[];
  /** Maps a pixel to the nearest color in the reduced palette. */
  map(color: RGBColor): RGBColor;
}

/**
 * Reduces `pixels` to at most `maxColors` colors using modified median cut
 * quantization. Returns a color map, or `false` if `pixels` is empty or
 * `maxColors` is less than 2. Throws if `maxColors` is not an integer in 1..256.
 */
export default function quantize(
  pixels: RGBColor[],
  maxColors: number
): ColorMap | false;
