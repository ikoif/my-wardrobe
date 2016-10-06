"use strict"

module.exports = function(KoaRouter, CategoryModel) {
    return new KoaRouter()
    .post('/category/create', function*() {
        let obj = this.request.body
        try {
            yield CategoryModel.create(obj)
        } catch (err) {
            console.log(err)
            obj = err
        }
        this.body = obj
    })
}