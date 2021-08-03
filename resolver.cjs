const resolver = require("enhanced-resolve").create.sync()

module.exports = function (request, options) {
  return resolver(options.basedir, request)
}