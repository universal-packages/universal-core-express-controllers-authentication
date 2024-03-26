jestCore.runApp('express-controllers', {
  coreConfigOverride: {
    apps: { location: './tests/__fixtures__' },
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe('ExpressControllers', (): void => {
  it('exposes the authentication controller', async (): Promise<void> => {
    await fGet('authentication/me')
    expect(fResponse).not.toHaveReturnedWithStatus('NOT_FOUND')
  })
})
