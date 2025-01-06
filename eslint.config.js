import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser"
import tseslint from "typescript-eslint";

export default tseslint.config(
  pluginJs.configs.all,
  tseslint.configs.all,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js"]
        },
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
  },
);
