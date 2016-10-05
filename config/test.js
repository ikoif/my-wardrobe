module.exports = function() {
    this.extends("default")

    this.properties({
        Port: 5001,
        mongo: {
            host: '127.0.0.1',
            port: '27017',
            db: 'nift-test',
            timeout: 3000,
            server:{
                reconnectTries: 2
            }
        }
    })
}