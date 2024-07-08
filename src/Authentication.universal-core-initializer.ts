import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class AuthenticationInitializer extends CoreInitializer {
  public static readonly initializerName = 'authentication'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
