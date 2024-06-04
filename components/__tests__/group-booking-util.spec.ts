import { describe, it, expect, beforeEach } from 'vitest'
import {
  DummyBookingBookingData,
  DummyBookingBookingDataWithEmpty,
  DummyBookingCustomerData,
  DummyBookingCustomerDataWithEmpty
} from './GroupBookingDummyData'
import { groupBookingExpectedData as ExpectedData } from './GroupBookingExpectedData'
// import { useBookingStore } from '@/stores/booking'
import { createPinia, setActivePinia } from 'pinia'
import { createEmailBody, createFilters, getPostData, useKeyMap } from '@/store/booking.util'
import { MapGroupBookingBooking, MapGroupBookingCustomer } from '../../types/booking.d'
//CLEAN: clean these up, there's too many of them

//REFACTOR: This probably needs to be revamped/some of it redundant with the nuxt change.
// Skipping anything that uses the booking store for now.
describe('GroupBookingUtil', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it.each([
    {
      name: 'customerData',
      map: MapGroupBookingCustomer,
      data: DummyBookingCustomerData,
      expected: ExpectedData.mappedCustomerData.default
    },
    {
      name: 'customerDataWithEmpty',
      map: MapGroupBookingCustomer,
      data: DummyBookingCustomerDataWithEmpty,
      expected: ExpectedData.mappedCustomerData.withEmpty
    }
  ])(
    'useKeyMap maps to the expected customer post object [$name]',
    async ({ data, expected, map }) => {
      const parsedData = useKeyMap(map, data)
      expect(parsedData).toEqual(expected)
    }
  )
  it.each([
    {
      name: 'bookingData',
      map: MapGroupBookingBooking,
      data: DummyBookingBookingData,
      expected: ExpectedData.mappedBookingData.default
    },
    {
      name: 'bookingDataWithEmpty',
      map: MapGroupBookingBooking,
      data: DummyBookingBookingDataWithEmpty,
      expected: ExpectedData.mappedBookingData.withEmpty
    }
  ])(
    'useKeyMap maps to the expected customer post object [$name]',
    async ({ data, expected, map }) => {
      const parsedData = useKeyMap(map, data)
      expect(parsedData).toEqual(expected)
    }
  )

  it.skip('createFilters correctly creates the filter string array', async () => {
    // const bookingStore = useBookingStore()

    const parsedData = await bookingStore.parseCustomerPostData(DummyBookingCustomerData)
    const parsedDataWithEmpty = await bookingStore.parseCustomerPostData(
      DummyBookingCustomerDataWithEmpty
    )

    const filters = await createFilters(parsedData)
    expect(filters).toEqual(ExpectedData.customerFilterArr.default)

    const filtersWithEmpty = await createFilters(parsedDataWithEmpty)
    expect(filtersWithEmpty).toEqual(ExpectedData.customerFilterArr.withEmpty)

    const filtersWithOmit = await createFilters(parsedDataWithEmpty, ['mbrm_subscription'])
    expect(filtersWithOmit).toEqual(ExpectedData.customerFilterArr.withOmit)
  })
  it.each([
    {
      name: 'customerData',
      map: MapGroupBookingCustomer,
      data: DummyBookingCustomerData,
      expected: ExpectedData.customerFilterArr.default
    },
    {
      name: 'customerDataWithEmpty',
      map: MapGroupBookingCustomer,
      data: DummyBookingCustomerDataWithEmpty,
      expected: ExpectedData.customerFilterArr.withEmpty
    },
    {
      name: 'customerDataWithOmit',
      map: MapGroupBookingCustomer,
      data: DummyBookingCustomerDataWithEmpty,
      omit: ['mbrm_subscription'],
      expected: ExpectedData.customerFilterArr.withOmit
    }
  ])(
    'parseFilters correctly parses a filter string array [$name]',
    ({ map, data, omit, expected }) => {
      const parsedData = useKeyMap(map, data)
      const filters = omit ? createFilters(parsedData, omit) : createFilters(parsedData)
      expect(filters).toEqual(expected)
    }
  )

  it.each([
    {
      name: 'bookingData',
      map: MapGroupBookingBooking,
      data: DummyBookingBookingData,
      expected: ExpectedData.bookingFilterArr.default
    },
    {
      name: 'bookingDataWithEmpty',
      map: MapGroupBookingBooking,
      data: DummyBookingBookingDataWithEmpty,
      expected: ExpectedData.bookingFilterArr.withEmpty
    },
    {
      name: 'bookingDataWithOmit',
      map: MapGroupBookingBooking,
      data: DummyBookingBookingDataWithEmpty,
      omit: ['mbrm_tourdate1'],
      expected: ExpectedData.bookingFilterArr.withOmit
    }
  ])(
    'parseFilters: correctly parses a filter string array [$name]',
    ({ map, data, omit, expected }) => {
      const parsedData = useKeyMap(map, data)
      const filters = omit ? createFilters(parsedData, omit) : createFilters(parsedData)
      filters.forEach((filter) => {
        expect(expected.includes(filter)).toEqual(true)
        expect(filter).toEqual(expected.find((f) => f == filter))
      })
    }
  )

  //   it('parseFilters: correctly parses a filter string array', async () => {
  //     const parsedData = useKeyMap(groupBookingCustomerPostDataMap, DummyBookingCustomerData)
  //     const parsedDataWithEmpty = useKeyMap(
  //       groupBookingCustomerPostDataMap,
  //       DummyBookingCustomerDataWithEmpty
  //     )

  //     const filters = createFilters(parsedData)

  //     const filtersWithEmpty = createFilters(parsedDataWithEmpty)

  //     const filtersWithOmit = createFilters(parsedDataWithEmpty, ['mbrm_subscription'])

  //     expect(parseFilters(filters)).toEqual(ExpectedData.filterStr.default)
  //     expect(parseFilters(filtersWithEmpty)).toEqual(ExpectedData.filterStr.withEmpty)
  //     expect(parseFilters(filtersWithOmit)).toEqual(ExpectedData.filterStr.withOmit)
  //   })

  it('getPostData correctly gets the postDataObj', () => {
    const pData = getPostData(DummyBookingCustomerData, MapGroupBookingCustomer)
    expect(pData).toEqual({
      data: ExpectedData.mappedCustomerData.default,
      filters: ExpectedData.customerFilterStr.default
    })

    const pDataWithEmpty = getPostData(DummyBookingCustomerDataWithEmpty, MapGroupBookingCustomer)
    expect(pDataWithEmpty).toEqual({
      data: ExpectedData.mappedCustomerData.withEmpty,
      filters: ExpectedData.customerFilterStr.withEmpty
    })

    const pDataWithOmit = getPostData(DummyBookingCustomerDataWithEmpty, MapGroupBookingCustomer, [
      'mbrm_subscription'
    ])
    expect(pDataWithOmit).toEqual({
      data: ExpectedData.mappedCustomerData.withEmpty,
      filters: ExpectedData.customerFilterStr.withOmit
    })
  })

  it.skip('booking email body', async () => {
    const ctx = {
      ctxEmailDCSignature: 'ANSTO Education Team',
      ctxEmailNewBookingBodyAck: `Thank you for requesting a tour of ANSTO. Your tour request will be processed by the ANSTO Education Team as soon as possible.`,
      ctxEmailSalutation: `Dear`
    }
    const body = await createEmailBody(DummyBookingCustomerData, DummyBookingBookingData, ctx)
    expect(body).toEqual(`<Head><Body><p>Dear John,</p>Thank you for requesting a tour of ANSTO. Your tour request will be processed by the ANSTO Education Team as soon as possible.<ul><li>Tour name: My Tour</li><li>Tour attendees planned: 20</li><li>Organisation name: Scholar's Academy</li></ul><br><br>ANSTO Education Team</Body></Head>`)
  })
})
