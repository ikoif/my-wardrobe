"use strict"

let spur = require("spur-ioc")
let spurCommon = require("spur-common")
let registerConfig = require("spur-common/registerConfig")

module.exports = function () {

    let ioc = spur.create("wardrobe")

    registerConfig(ioc, __dirname + "/config")

    ioc.merge(spurCommon())
    // ioc.merge(spurWeb())

    let mongoose = require("mongoose")
    mongoose.Promise = global.Promise

    // Set some global dependencies
    ioc.registerDependencies({
        "firebase" : require("firebase"),
        "koa" : require("koa"),
        "KoaRouter" : require("koa-router"),
        "bodyParser" : require('koa-bodyparser'),
        "mongoose": mongoose,
        "Schema": mongoose.Schema
    })

    // Register source of domains
    ioc.registerFolders(__dirname, [
        "src"
    ])

    return ioc
}