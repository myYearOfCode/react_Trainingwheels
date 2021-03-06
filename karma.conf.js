module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'jasmine-matchers'],
    files: [
    './custom-matchers.js',
    '*.js',
    '*.spec.js'
  ],
  plugins: ['karma-jasmine', 'karma-jasmine-matchers'],
  reporters: ['progress'],
  color: true,
  singleRun: false
  })
}
