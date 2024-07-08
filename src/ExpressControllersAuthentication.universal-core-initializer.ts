import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersAuthenticationInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-authentication'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
