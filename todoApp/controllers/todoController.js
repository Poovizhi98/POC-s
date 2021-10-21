var data = [{ item: 'mouse' }, { item: 'keyboard' }, { item: 'motherboard' }];
var mongoose = require("mongoose")

module.exports = function (app) {

    app.get('/todo', function (request, response) {

        //connection cloud
        mongoose.connect("mongodb://tufail:ahmed123@ds339348.mlab.com:39348/todoappdxc")
        //schema
        var todoSchema = new mongoose.Schema({
            item: String
        })

        //Model
        var Todo = mongoose.model('Todo', todoSchema)

        //adding the item in mongo db database
        var oneItem = Todo({ item: 'Bottle' }).save(function (err) {
            if (err)
                console.error(err);
            console.log("item saved");
        })
        response.render("todo", { todos: data });
    });

    app.post('/todo', function (request, response) {
        response.send("TODO POST")
    });
    app.delete('/todo', function (request, response) {
        response.send("TODO DELETE")
    });
};
