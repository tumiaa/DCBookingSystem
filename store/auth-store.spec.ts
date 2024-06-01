import { useAuthStore } from '~/store/auth'
import { afterEach } from 'node:test'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const testValues = {
  prod: { mode: 'production', subkey: 'i-am-a-prod-key', expected_url: 'dc' },
  test: { mode: 'test', subkey: 'i-am-a-test-key', expected_url: 'dc-test' },
  dev: { mode: 'development', subkey: 'i-am-a-dev-key', expected_url: 'dc-dev' }
}

describe('useAuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.stubEnv('VITE_SUBKEY', 'i-am-a-key')
  })

  it('process and import meta check', () => {
    expect(import.meta.env.MODE).toBeDefined()
    expect(process.env.MODE).toBeDefined()

    expect(import.meta.env.MODE).toEqual(process.env.MODE)
  })

  it.each([testValues.prod, testValues.test, testValues.dev])(
    'authstore: axios ($mode)',
    async ({ mode, subkey, expected_url }) => {
      vi.stubEnv('MODE', mode)
      vi.stubEnv('VITE_SUBKEY', subkey)

      const store = useAuthStore()

      const clientAuth = await store.getClientAuth()
      expect(clientAuth).toBeDefined()
      expect(clientAuth).toEqual(process.env.VITE_SUBKEY)
      expect(clientAuth).toEqual(import.meta.env.VITE_SUBKEY)

      const axios = await store.getAxios()
      expect(axios).toBeDefined()

      expect(axios.defaults.baseURL).toBe(`https://webdevapim.azure-api.net/${expected_url}`)
      expect(axios.defaults.headers['Ocp-Apim-Subscription-Key']).toBe(clientAuth)
    }
  )
  it('clientauth is only created once', async () => {
    const store = useAuthStore()
    const clientAuth1 = await store.getClientAuth()
    expect(clientAuth1).toBeDefined();
    
    vi.stubEnv('VITE_SUBKEY', 'boop')

    const clientAuth2 = await store.getClientAuth()
    expect(clientAuth2).toBeDefined();


    expect(clientAuth1).toEqual(clientAuth2)
    expect(clientAuth1).not.toBe('boop')

  })
  it('axios is only created once', async () => {
    const store = useAuthStore()
    const axios1 = await store.getAxios()
    expect(axios1).toBeDefined();

    vi.stubEnv('VITE_SUBKEY', 'boop')

    const axios2 = await store.getAxios()
    expect(axios2).toBeDefined();

    expect(axios1).toEqual(axios2)
    expect(axios1.defaults.headers['Ocp-Apim-Subscription-Key']).not.toBe('boop')

  })
  afterEach(() => {
    vi.unstubAllEnvs()
  })
})
