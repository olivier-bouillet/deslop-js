import { useThing } from "./useThing";
import { usedHelper } from "./helpers";
import { greeting } from "./greeting";
import { Panel } from "./panel";
import { Banner } from "./banner";
import { formatValue } from "./format";
import { usedFormatUtil } from "./format.utils";

export const main = (): string =>
  [useThing() + usedHelper(), greeting(), Panel(), Banner(), formatValue(), usedFormatUtil()].join(
    ":",
  );
