"use strict";
/**
 * Created by jack on 8/19/16.
 */
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('no todo found,create....');
            var todos = [
                {
                    id: 1,
                    text: "Pickup kids at shcool"
                },
                {
                    id: 2,
                    text: "Meeting with Boss"
                }, {
                    id: 3,
                    text: "Dinner with wife"
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }
        else {
            console.log('Fond todos');
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=initTodo.js.map