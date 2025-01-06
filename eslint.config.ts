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
          allowDefaultProject: ["eslint.config.ts"]
        },
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      import: fixupPluginRules(importPlugin),
    },
  },
);
