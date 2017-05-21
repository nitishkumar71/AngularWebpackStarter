"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('App', function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should have header', function () {
        var subject = protractor_1.element(protractor_1.by.css('h1')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e-spec.js.map