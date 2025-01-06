import globals from "globals";
import tsParser from "@typescript-eslint/parser"

export const languageOptions = {
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
}
