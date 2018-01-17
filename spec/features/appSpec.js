'use strict';

const app = require('../../app');  
const Browser = require('zombie');
const PORT = process.env.NODE_ENV === 'production' ? 3000 : 3001; 
Browser.localhost('example.com', PORT);
      
describe('client', () => {
      
  let browser, document;       
  beforeEach((done) => {       
    browser = new Browser({ waitDuration: '30s', loadCss: false });

    // document
    browser.on('loading', (doc) => {
      document = doc;
      document.addEventListener("DOMContentLoaded", (event) => {
        done();
      });
    });

    browser.visit('/', (err) => {
      if (err) done.fail(err);
      browser.assert.success();
    });
  });

  describe('UI', () => {
    it('has a friendly greeting', () => {
      browser.assert.text('h1', 'Intelli API');
      browser.assert.text('h2', 'Hello, world!');
    });
  });

});
