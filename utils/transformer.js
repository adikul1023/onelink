import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";

// Remove empty values to reduce data size
const cleanData = (obj) => {
  const cleaned = {};
  for (const key in obj) {
    if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
      // For arrays, filter out empty objects
      if (Array.isArray(obj[key])) {
        const filteredArray = obj[key].filter(item => {
          if (typeof item === 'object') {
            return Object.values(item).some(val => val !== "" && val !== null && val !== undefined);
          }
          return item !== "" && item !== null && item !== undefined;
        });
        if (filteredArray.length > 0) {
          cleaned[key] = filteredArray;
        }
      } else {
        cleaned[key] = obj[key];
      }
    }
  }
  return cleaned;
};

export const encodeData = (obj) => {
  const cleaned = cleanData(obj);
  return compressToEncodedURIComponent(JSON.stringify(cleaned));
};

export const decodeData = (compressed) => {
  try {
    if (!compressed) return {};
    const decompressed = decompressFromEncodedURIComponent(compressed);
    return JSON.parse(decompressed);
  } catch (error) {
    console.error("Error decoding data:", error);
    return {};
  }
};
