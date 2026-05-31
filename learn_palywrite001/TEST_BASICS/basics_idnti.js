function isValidJsBasicsIdentifier(name) {
  const trimmed = name.trim();

  return (
    trimmed.length > 0 &&
    !["let", "const", "var", "class", "function", "return"].includes(trimmed) &&
    /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(trimmed)
  );
}
console.log(isValidJsBasicsIdentifier("loginButton")); // true
console.log(isValidJsBasicsIdentifier("$submit"));     // true
console.log(isValidJsBasicsIdentifier("1login"));      // false
console.log(isValidJsBasicsIdentifier("let"));         // false
console.log(isValidJsBasicsIdentifier("_user1"));      // true
console.log(isValidJsBasicsIdentifier(" userName "));  // true