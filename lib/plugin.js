import { logger } from 'appium-support';

export default class BasePlugin {

  constructor (pluginName) {
    this.logger = logger.getLogger(`Plugin [${pluginName}]`);
  }

  onServer (next) {
    next();
  }

  onCommand (next) {
    next();
  }
}
