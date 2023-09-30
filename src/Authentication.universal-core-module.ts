import { Authentication } from '@universal-packages/authentication'
import { CoreModule } from '@universal-packages/core'
import { ExpressControllerAuthenticationOptions, initialize } from '@universal-packages/express-controllers-authentication'
import { TerminalTransport } from '@universal-packages/logger'

export default class AuthenticationModule extends CoreModule<ExpressControllerAuthenticationOptions> {
  public static readonly moduleName = 'authentication-module'
  public static readonly description = 'Authentication core module wrapper'
  public static readonly defaultConfig: ExpressControllerAuthenticationOptions = { dynamicsLocation: './src', secret: 'default' }

  public subject: Authentication

  public async prepare(): Promise<void> {
    const terminalTransport = this.logger.getTransport('terminal') as TerminalTransport
    terminalTransport.options.categoryColors['AUTH'] = 'YELLOW'

    this.subject = (await initialize(this.config)).instance

    this.subject.on('warning', (event): void => {
      this.logger.publish('WARNING', 'Authentication Dynamic waring', event.payload.message, 'AUTH', { metadata: event.payload })
    })
  }

  public async release(): Promise<void> {}
}
