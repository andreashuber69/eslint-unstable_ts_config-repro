import { ESLint } from "eslint";

const eslint = new ESLint({ flags: ["unstable_ts_config"] });
// eslint-disable-next-line no-console
console.log(await eslint.calculateConfigForFile("src/index.ts"));
