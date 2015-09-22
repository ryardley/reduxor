/*eslint-env node, mocha */

import {expect} from 'chai';
import Browser from 'zombie';
import app from '../src/server/app';

describe('tests', () => {
  let server;
  let browser;

  before(function() {
    server = app.listen(3001);
  });

  beforeEach(() => {
    browser = new Browser();
  });

  after(function() {
    server.close();
  });


  it('should be true', (done) => {
    browser.visit('http://localhost:3001')
      .then(() => {
        expect(browser.text('h1')).to.equal('App Header');
        done();
      });

  });
});
