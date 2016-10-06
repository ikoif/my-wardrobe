"use strict"

module.exports = function(KoaRouter, WearableModel) {
    return new KoaRouter().post('/wearable/create', function*() {
        let obj = this.request.body
        try {
            yield WearableModel.create(obj)
        } catch (err) {
            console.log(err)
            obj = err
        }
        this.body = obj
    })
}