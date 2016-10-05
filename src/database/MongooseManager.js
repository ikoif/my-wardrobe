"use strict";


module.exports = function(mongoose, config, Logger, _) {

    return new class MongooseManager {
        constructor() {
            this.connection = mongoose.createConnection()
        }

        connect(overrideOptions){
            return this.disconnect().then(()=> {
                return this._connect(overrideOptions)
            })
        }
        _connect(overrideOptions) {
            overrideOptions = overrideOptions || {
                options: {}
            }
            let uri = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`
            let options = {
                user: config.mongo.username,
                pass: config.mongo.password,
                server: config.mongo.server
            }

            // Allow overriding of options object if passed as an argument
            uri = overrideOptions.uri || uri
            options = _.extend({}, options, overrideOptions.options)
            // Return connection or error
            this.connection.open(uri, options, (err) => {
                if (err) {
                    Logger.error('Error while connecting to mongo using MongooseManager', err)
                }
            })

            return new Promise((resolve, reject) => {
                this.connection.on("error", (err) => {
                    Logger.error(err)
                    this.connected = false
                    reject(new Error(`Stumbled on error while connecting to Mongo with uri: ${uri}`))
                })

                this.connection.on("open", () => {
                    this.connected = true
                    resolve(this.connection)
                })

                setTimeout(() => {
                    reject(new Error(`Failed to connect to Mongo with uri: ${uri}`))
                }, config.mongo.timeout)
            })
        }

        disconnect() {
            let clearMessage = `Connection closed and cleared`            
            if (this.connection && this.connected) {
                return new Promise((resolve, reject) => {
                    try {
                        this.connection.close()
                        this.connection.on("close", () => {
                            this.connected = false
                            resolve(clearMessage)
                        })
                    } catch (err) {
                        this.connected = false
                        reject(err)
                    }
                })
            } else {
                return Promise.resolve(clearMessage)
            }
        }
    }

}
