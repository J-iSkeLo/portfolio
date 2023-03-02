const { alias } = require('react-app-rewire-alias')

const aliasMap = {
    '@': 'src',
}

module.exports = function override(config, env) {
    alias(aliasMap)(config)
    return config
}