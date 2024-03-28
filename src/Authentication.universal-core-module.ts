import { Authentication } from '@universal-packages/authentication'
import { CoreModule } from '@universal-packages/core'
import { ExpressControllerAuthenticationOptions, initialize } from '@universal-packages/express-controllers-authentication'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class AuthenticationModule extends CoreModule<ExpressControllerAuthenticationOptions> {
  public static readonly moduleName = 'authentication-module'
  public static readonly description = 'Authentication core module wrapper'
  public static readonly defaultConfig: ExpressControllerAuthenticationOptions = { dynamicsLocation: './src', secret: 'default' }

  public subject: Authentication

  public async prepare(): Promise<void> {
    this.subject = (await initialize(this.config)).instance

    this.subject.on('warning', (event): void => {
      this.logger.log(
        {
          level: 'WARNING',
          title: 'Authentication Dynamic waring',
          message: event.payload.message,
          category: 'AUTH',
          metadata: event.payload
        },
        LOG_CONFIGURATION
      )
    })
  }

  public async release(): Promise<void> {}
}
