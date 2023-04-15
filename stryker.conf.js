module.exports = function(config) {
  config.set({
    mutate: [
      './app/**/!(config.*|*.spec).js',
      '!app/schemas/country-cl/**',
      '!app/schemas/common/**'
    ],
    mutator: {
      name: 'javascript',
      excludedMutations: [
        'StringLiteral',
        'ObjectLiteral'
      ]
    },
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    thresholds: { high: 80, low: 50, break: 80 },
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "all",
    mochaOptions: {
      spec: ['./app/**/*.spec.js'],
      timeOut: 5000,
    }
  });
};