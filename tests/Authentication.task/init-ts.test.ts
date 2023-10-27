import { populateTemplates } from '@universal-packages/template-populator'

import AuthenticationTask from '../__fixtures__/Authentication.task'

jest.mock('@universal-packages/template-populator')

describe(AuthenticationTask, (): void => {
  it('execs an init directive for ts', async (): Promise<void> => {
    await jestCore.execTask('authentication-task', {
      directive: 'init',

      args: { ts: true },
      coreConfigOverride: {
        config: { location: './tests/__fixtures__/config' },
        modules: { location: './tests/__fixtures__' },
        tasks: { location: './tests/__fixtures__' },
        logger: { silence: true }
      }
    })

    expect(populateTemplates).toHaveBeenCalledWith(expect.stringMatching(/universal-core-express-controllers-authentication\/src\/template-ts/), './src', { override: undefined })
  })
})
