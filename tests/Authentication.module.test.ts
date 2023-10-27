import { AuthenticationModule } from '../src'

jestCore.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(AuthenticationModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.authenticationSubject).not.toBeUndefined()
    expect(global.authenticationSubject.options).toEqual({
      debug: true,
      dynamicsLocation: './tests/__fixtures__',
      maxAttemptsUntilLock: 5,
      multiFactorActivityLimit: '5 minutes',
      rootPath: 'authentication',
      secret: 'core-test-secret',
      routes: {
        connectProvider: { enable: true, path: 'connect-provider', method: 'PATCH' },
        continueWithProvider: { enable: true, path: 'continue-with-provider', method: 'POST' },
        invite: { enable: true, path: 'invite', method: 'PUT' },
        logIn: { enable: true, path: 'log-in', method: 'POST' },
        logOut: { enable: true, path: 'log-out', method: 'DELETE' },
        me: { enable: true, path: 'me', method: 'GET' },
        requestConfirmation: { enable: true, path: 'request-confirmation', method: 'PUT' },
        requestCorroboration: { enable: true, path: 'request-corroboration', method: 'PUT' },
        requestMultiFactor: { enable: true, path: 'request-multi-factor', method: 'PUT' },
        requestPasswordReset: { enable: true, path: 'request-password-reset', method: 'PUT' },
        requestUnlock: { enable: true, path: 'request-unlock', method: 'PUT' },
        signUp: { enable: true, path: 'sign-up', method: 'POST' },
        sessions: { enable: true, path: 'sessions', method: 'GET' },
        updateAuthenticatable: { enable: true, path: 'update-authenticatable', method: 'PATCH' },
        updateCredential: { enable: true, path: 'update-credential', method: 'PATCH' },
        updateDeviceId: { enable: true, path: 'update-device-id', method: 'PATCH' },
        verifyConfirmation: { enable: true, path: 'verify-confirmation', method: 'PUT' },
        verifyCorroboration: { enable: true, path: 'verify-corroboration', method: 'PUT' },
        verifyMultiFactor: { enable: true, path: 'verify-multi-factor', method: 'PUT' },
        verifyPasswordReset: { enable: true, path: 'verify-password-reset', method: 'PUT' },
        verifyUnlock: { enable: true, path: 'verify-unlock', method: 'PUT' }
      },
      email: {
        enablePasswordCheck: true,
        enforcePasswordCheck: true,
        sendMultiFactorInPlace: true,
        enableSignUp: true
      },
      phone: {
        enableMultiFactor: true,
        enforceMultiFactor: true,
        sendMultiFactorInPlace: true,
        enableCorroboration: true,
        enableSignUp: true
      },
      validations: {
        password: { size: { max: 256, min: 8 } },
        username: { matcher: /^[a-zA-Z.0-9_\-&]+$/i },
        email: {},
        phone: {}
      },
      providerKeys: {},
      namespace: 'auth'
    })
  })
})
