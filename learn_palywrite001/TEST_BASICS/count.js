function countPassingJsBasicsChecks(results) {
  return results.filter(result =>
    result.toLowerCase().includes("pass")
  ).length;
}
console.log(countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"]));
// 2

console.log(countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"]));
// 2

console.log(countPassingJsBasicsChecks(["one-fail","two-skip"]));
// 0
