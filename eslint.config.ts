import { fixupPluginRules } from "@eslint/compat";
import importPlugin from "eslint-plugin-import";
import { languageOptions } from "./src/languageOptions.js";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  pluginJs.configs.all,
  tseslint.configs.all,
  {
    languageOptions,
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      import: fixupPluginRules(importPlugin),
    },
  },
);
