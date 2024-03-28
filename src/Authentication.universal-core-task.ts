import { CoreTask } from '@universal-packages/core'
import { populateTemplates } from '@universal-packages/template-populator'
import path from 'path'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class AuthenticationTask extends CoreTask {
  public static readonly taskName = 'authentication-task'
  public static readonly description = 'Authentication related tasks'

  public async exec(): Promise<void> {
    switch (this.directive) {
      case 'init':
        if (this.args.ts) {
          await populateTemplates(path.resolve(__dirname, 'template-ts'), './src', { override: this.args.f })
        } else {
          await populateTemplates(path.resolve(__dirname, 'template'), './src', { override: this.args.f })
        }

        this.logger.log({ level: 'INFO', title: 'Authentication template initialized' }, LOG_CONFIGURATION)
        break
      default:
        throw new Error(`Unrecognized directive ${this.directive}`)
    }
  }
}
