import AuthenticationTask from '../__fixtures__/Authentication.task'

describe(AuthenticationTask, (): void => {
  it('throws an error if directive is not recognized', async (): Promise<void> => {
    await expect(
      jestCore.execTask('authentication-task', {
        directive: 'nop',

        args: { f: true },
        coreConfigOverride: {
          config: { location: './tests/__fixtures__/config' },
          modules: { location: './tests/__fixtures__' },
          tasks: { location: './tests/__fixtures__' },
          logger: { silence: true }
        }
      })
    ).rejects.toThrow('Unrecognized directive nop')
  })
})
