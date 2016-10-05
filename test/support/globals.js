"use strict";

require('jasmine-co').install()

let injector = require("./injector")
let _ = require("lodash")

global.injector = injector
global._ = _

global.returnError = (promise) => {
    return promise.then(() => {
        return Promise.reject(new Error('there was no error'))
    }).catch((e) => {
        return e.message
    })
}

global.injectIntoScope = (scope, deps) => {
    let instances = injector().injectAndReturn(deps)
    _.assign(scope, instances)
}