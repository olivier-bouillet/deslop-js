import { PLATFORM_SUFFIXES } from "../constants.js";

// Strip a trailing run of platform suffixes so every platform variant of a
// module shares one base path: `Button.web.tsx`, `Button.native.tsx` and the
// react-native-tvos compound `Button.ios.tv.tsx` all map to `Button.tsx`.
// Paths without a platform suffix are returned unchanged.
export const platformStrippedBasePath = (modulePath: string): string => {
  const extensionIndex = modulePath.lastIndexOf(".");
  if (extensionIndex === -1) return modulePath;
  let stem = modulePath.slice(0, extensionIndex);
  const extension = modulePath.slice(extensionIndex);
  for (let strippedSuffix = true; strippedSuffix; ) {
    strippedSuffix = false;
    for (const suffix of PLATFORM_SUFFIXES) {
      if (stem.endsWith(suffix)) {
        stem = stem.slice(0, -suffix.length);
        strippedSuffix = true;
        break;
      }
    }
  }
  return stem + extension;
};
