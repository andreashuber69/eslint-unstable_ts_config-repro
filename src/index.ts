import { ESLint } from "eslint";

const eslint = new ESLint();
// eslint-disable-next-line no-console
console.log(await eslint.calculateConfigForFile("src/index.ts"));
