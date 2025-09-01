// helper method to apply theme based on type
function applyTheme(theme: "light" | "dark"): void {
  // Some implementation ...
}

applyTheme("light"); // Valid
applyTheme("dark");  // Valid

// applyTheme("blue"); // Error: Argument of type '"blue"' is not assignable to parameter of type '"light" | "dark"'.
