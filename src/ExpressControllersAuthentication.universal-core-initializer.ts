import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersAuthenticationInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-authentication'
  public static readonly description: string = 'Core Express Controllers Authentication Initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
