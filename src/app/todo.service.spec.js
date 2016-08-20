/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var todo_service_1 = require('./todo.service');
describe('Service: Todo', function () {
    beforeEach(function () {
        testing_1.addProviders([todo_service_1.TodoService]);
    });
    it('should ...', testing_1.inject([todo_service_1.TodoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=todo.service.spec.js.map