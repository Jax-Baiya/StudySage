
module.exports = {
  // ...existing code...
  plugins: [
    // ...existing plugins...
    // Replace deprecated plugins
    // "@babel/plugin-proposal-private-methods",
    "@babel/plugin-transform-private-methods",
    // "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-class-properties",
    // "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-transform-numeric-separator",
    // "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-transform-nullish-coalescing-operator",
    // "@babel/plugin-proposal-private-property-in-object",
    "@babel/plugin-transform-private-property-in-object",
    // "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-optional-chaining"
    // ...other plugin updates...
  ],
};