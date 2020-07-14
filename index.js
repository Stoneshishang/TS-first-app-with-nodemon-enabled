"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    // const ID = todo.ID;
    // const title = todo.Title;
    // const finished = todo.finished;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    // console.log(todo);
    // console.log(`
    // todo is ${JSON.stringify(todo)}`);
    // console.log(`
    // The Todo with ID: ${id}
    // Has a title of: ${title}
    // Is it finished? ${completed}
    // `);
    // logTodo(id, completed, title);
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log(" \n  Testing scripting!\n\n  The Todo with ID: " + id + "\n  Has a title of: " + title + "\n  Is it finished? " + completed + "\n\n  2 Testing done!\n  ");
};
