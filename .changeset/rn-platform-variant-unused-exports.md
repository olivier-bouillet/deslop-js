---
"deslop-js": patch
---

Fix `unused-export` (and `unused-file`) false positives for React Native / Expo platform-variant modules. When a project is React Native, `foo.ts` and its platform siblings (`foo.web.ts`, `foo.native.ts`, `foo.ios.tsx`, and react-native-tvos compounds like `foo.ios.tv.tsx`) are now treated as one logical module, so an export used through one variant no longer reports the identical export in the other variants as unused. Adds resolution + reachability support for `.tv` / `.ios.tv` / `.android.tv` extensions, and a compound-suffix run-strip so multi-part platform suffixes group with their base.
