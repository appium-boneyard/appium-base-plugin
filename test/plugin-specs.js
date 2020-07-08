import BasePlugin from '..';
import chai from 'chai';

const should = chai.should();

describe('base plugin', function () {
  it('should exist', function () {
    should.exist(BasePlugin);
  });
  it('should create a logger', function () {
    const p = new BasePlugin('foo');
    should.exist(p.logger);
  });
  it('should do nothing in the onServer function', async function () {
    const p = new BasePlugin('foo');
    let called = false;
    await p.onServer(() => called = true);
    called.should.be.true;
  });
  it('should do nothing in the onCommand function', async function () {
    const p = new BasePlugin('foo');
    let called = false;
    await p.onCommand(() => called = true);
    called.should.be.true;
  });
});
