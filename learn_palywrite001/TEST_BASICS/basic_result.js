function summarizeJsBasicsResults(results) {
  return {
    total: results.length,
    passed: results.filter(r => r.toLowerCase().includes("pass")).length,
    failed: results.filter(r => r.toLowerCase().includes("fail")).length,
    skipped: results.filter(r => r.toLowerCase().includes("skip")).length
  };
}
console.log(summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"]));
// { total: 3, passed: 1, failed: 1, skipped: 1 }

console.log(summarizeJsBasicsResults([]));
// { total: 0, passed: 0, failed: 0, skipped: 0 }

console.log(summarizeJsBasicsResults(["a-pass","b-pass"]));
// { total: 2, passed: 2, failed: 0, skipped: 0 }