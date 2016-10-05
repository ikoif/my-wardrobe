"use strict"

let spur = require("spur-ioc")
let platformInjector = require("../../injector")

module.exports = function() {

    let ioc = spur.create("test-ioc")

    ioc.merge(platformInjector())

    // Set some global dependencies
    ioc.registerDependencies({
    })

    // Register source of domains
    ioc.registerFolders(__dirname, [])

    return ioc
}