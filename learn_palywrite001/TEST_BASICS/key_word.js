function getJsBasicsKeywordMeaning(term) {
  const keywords = {
    node: "runtime",
    v8: "engine",
    npm: "package-manager"
  };

  const normalized = term.trim().toLowerCase();
  return keywords[normalized] || "unknown";
}
console.log(getJsBasicsKeywordMeaning("NODE"));        // "runtime"
console.log(getJsBasicsKeywordMeaning(" v8 "));        // "engine"
console.log(getJsBasicsKeywordMeaning("npm"));         // "package-manager"
console.log(getJsBasicsKeywordMeaning("not-a-topic")); // "unknown"