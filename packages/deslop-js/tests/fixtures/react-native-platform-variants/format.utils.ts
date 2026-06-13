export const usedFormatUtil = (): string => "used";

// Same name as the used export in format.ts. `.utils` is NOT a platform suffix,
// so this file must stay a distinct module and this export must be flagged.
export const formatValue = (): string => "util-not-a-platform-variant";
