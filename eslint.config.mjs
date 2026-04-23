import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,

  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": "error",
    },
  },
);
