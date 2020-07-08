import BasePlugin from '..';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const should = chai.should();

describe('base plugin', function () {
  it('should exist', function () {
    should.exist(BasePlugin);
  });
  it('should create a logger', function () {
    const p = new BasePlugin('foo');
    should.exist(p.logger);
  });
  it('should define a default list of no commands handled', function () {
    const p = new BasePlugin('foo');
    p.handleCommands.should.eql([]);
  });
  it('should define a default list of no commands wrapped', function () {
    const p = new BasePlugin('foo');
    p.wrapCommands.should.eql([]);
  });
  it('should do nothing in the updateServer function', async function () {
    const p = new BasePlugin('foo');
    await p.updateServer();
  });
  it('should do nothing in the handleCommand function', async function () {
    const p = new BasePlugin('foo');
    const driver = {findElement: (fake1, fake2) => `${fake1} ${fake2}`};
    await p.handleCommand(driver, 'findElement', 'str1', 'str2').should.eventually.eql('str1 str2');
  });
  it('should do nothing in the wrapCommand function', async function () {
    const p = new BasePlugin('foo');
    await p.wrapCommand(() => 'wrapped').should.eventually.eql('wrapped');
  });
});
