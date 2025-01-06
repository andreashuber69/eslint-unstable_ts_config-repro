import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser"
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
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
          allowDefaultProject: ["eslint.config.mjs"]
        },
        tsconfigRootDir: process.cwd(),
      },
    },
  }
);
