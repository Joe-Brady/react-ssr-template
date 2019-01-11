/* eslint-disable */
import React from "react";

// Provide React globally during tests. Necessary to match global React provided in webpack config.
global.React = React;

// Make tests fail when Jest logs a failed prop type error.
const originalConsoleError = console.error;
console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }
  originalConsoleError(message);
};
