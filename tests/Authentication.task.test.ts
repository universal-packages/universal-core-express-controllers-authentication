import { Logger } from '@universal-packages/logger'
import { populateTemplates } from '@universal-packages/template-populator'
import AuthenticationTask from '../src/Authentication.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe('AuthenticationTask', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })

    let task = new AuthenticationTask('init', [], {}, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()

    task = new AuthenticationTask('init', [], { ts: true }, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()
  })
})
