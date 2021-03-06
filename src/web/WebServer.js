"use strict"

module.exports = function (koa, EndpointManager, bodyParser, Logger, config) {
    return new class WebServer {
        constructor() {
            this.app = koa()
            this.app.use(bodyParser())
            EndpointManager.register(this.app)

        }

        start() {
            return new Promise((resolve)=>{
                this.server = require('http').createServer(this.app.callback())
                this.server = require('http-shutdown')(this.server)
                this.server.listen(config.Port, resolve)
                Logger.info(`WebServer started at ${config.Port}`)
            })
        }

        stop() {
            return new Promise((resolve)=>{
                this.server.shutdown(resolve)
            })
        }
    }
}