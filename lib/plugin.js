import { logger } from 'appium-support';

export default class BasePlugin {

  constructor (pluginName) {
    this.logger = logger.getLogger(`Plugin [${pluginName}]`);
    this.handleCommands = [];
    this.wrapCommands = [];
  }

  async updateServer (/*server*/) {
  }

  async handleCommand (driver, cmdName, ...args) {
    return await driver[cmdName](...args);
  }

  async wrapCommand (runCmd/*, driver, cmdName, ...args*/) { // eslint-disable-line require-await
    return await runCmd();
  }
}
