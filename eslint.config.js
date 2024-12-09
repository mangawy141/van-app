import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest", // Ensures compatibility with the latest ECMAScript features
        ecmaFeatures: { jsx: true }, // Enable JSX
        sourceType: "module", // Use ES module syntax
      },
    },
    settings: { react: { version: "detect" } }, // Automatically detect React version
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Extend basic recommended JS rules
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs["jsx-runtime"].rules, // For the new JSX transform (React 17+)
      ...reactHooks.configs.recommended.rules, // Enforce React Hooks rules
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], // Warn for non-component exports in HMR
      "react/react-in-jsx-scope": "off", // No need to import React in scope with React 17+
      "react/prop-types": "off", // Turn off prop-types if you don't use them
      "react-hooks/rules-of-hooks": "error", // Ensure hooks are used properly
      "react-hooks/exhaustive-deps": "warn", // Warn about missing hook dependencies
    },
  },
];
