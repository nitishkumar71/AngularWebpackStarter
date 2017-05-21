import { browser, by, element } from 'protractor';

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have header', () => {
        let subject = element(by.css('h1')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });

});