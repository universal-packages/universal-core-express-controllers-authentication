import { ExpressControllersAuthentication } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressControllersAuthentication, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.expressControllersAuthenticationSubject).not.toBeUndefined()
    expect(global.expressControllersAuthenticationSubject.options).toEqual({
      debug: true,
      dynamicsLocation: './tests/__fixtures__',
      accumulate: true,
      defaultModule: {
        enabled: true
      },
      modules: {
        default: {
          enabled: true
        }
      },
      rootPath: 'authentication',
      secret: 'core-test-secret',
      namespace: 'auth'
    })
  })
})
