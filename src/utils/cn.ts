import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 * Uses `clsx` to conditionally join class names together.
 * Then merges Tailwind CSS classes using `twMerge` to handle conflicts.
 *
 * @param {...ClassValue[]} inputs - The class names to combine.
 * @returns {string} - The combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
