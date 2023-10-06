const argv = require('./argv');

// module.exports = parseInt(argv.port || process.env.PORT || '3001', 10);

// port 8801 for deploy

module.exports = parseInt(argv.port || process.env.PORT || '8801', 10);
