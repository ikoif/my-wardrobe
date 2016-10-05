"use strict"

module.exports = function(KoaRouter) {
    return new KoaRouter().get('/hello', function() {
        this.set('Content-Type', 'text/html')
        this.body = `Hey`
    })
}