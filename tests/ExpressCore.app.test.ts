jestCore.runApp('express-app', {
  coreConfigOverride: {
    apps: { location: './tests/__fixtures__' },
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe('ExpressCore', (): void => {
  it('exposes the authentication controller', async (): Promise<void> => {
    await fGet('authentication/me')
    expect(fResponse).not.toHaveReturnedWithStatus('NOT_FOUND')
  })
})
