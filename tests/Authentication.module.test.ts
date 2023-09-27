import { Logger } from '@universal-packages/logger'

import { AuthenticationModule } from '../src'

describe(AuthenticationModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new AuthenticationModule({ dynamicsLocation: './src', secret: 'default' } as any, logger)

    await module.prepare()
    await module.release()
  })
})
