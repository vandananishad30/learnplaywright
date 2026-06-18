function classifyJsBasicsScore(score) {
  if (score >= 90) return "EXCELLENT";
  if (score >= 75) return "GOOD";
  if (score >= 50) return "NEEDS_PRACTICE";
  return "REVISIT";
}
console.log(classifyJsBasicsScore(95)); // EXCELLENT
console.log(classifyJsBasicsScore(75)); // GOOD
console.log(classifyJsBasicsScore(50)); // NEEDS_PRACTICE
console.log(classifyJsBasicsScore(32)); // REVISIT
console.log(classifyJsBasicsScore(89)); // GOOD
console.log(classifyJsBasicsScore(90)); // EXCELLENT