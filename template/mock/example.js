module.exports = function (app) {
    app.view({
        url: '/example',
        template: '/example/index.html',
        data: {
            name: 'nimo',
            data: {
                arr: [1,2,3],
                obj: {name: 'some'},
                number:1,
                string: "abc"
            }
        }
    })
}
