"use strict"

let injector = require("./injector")

injector().inject(function (WebServer, FirebaseDbManager) {
	FirebaseDbManager.connect()
    WebServer.start()
})