import { logger } from 'appium-support';

export default class BasePlugin {

  constructor (pluginName) {
    this.logger = logger.getLogger(`Plugin [${pluginName}]`);
    this.handleCommands = [];
  }

  updateServer () {
  }

  async handleCommand (driver, cmdName, ...args) {
    return await driver[cmdName](...args);
  }
}
