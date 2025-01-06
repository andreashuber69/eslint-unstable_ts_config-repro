import { languageOptions } from "./src/languageOptions.js";

import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  pluginJs.configs.all,
  tseslint.configs.all,
  {
    languageOptions,
  }
);
