import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { SelectOptionsValues } from "~/components/form-item/FormItem";

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(url:string): Promise<string> {
    return fetch<string>(url);
  },

  tours: {
    toursTable: "mbrm_dc_tourses",
    async getTourNames(type: string): Promise<SelectOptionsValues> {
      const selectValues = "mbrm_tourname,mbrm_tournumber";
      const filterValues = `statuscode eq 1 and mbrm_tourtype eq ${type}`;

      const data = await fetch<SelectOptionsValues>(
        `/${this.toursTable}?$select=${selectValues}&$filter=${filterValues}`
      );
      return data.map((m: any) => ({
        displayValue: m.mbrm_tourname,
        value: m.mbrm_tournumber,
      }));
    },
  },

  bookings: {
    bookingsTable: "mbrm_dc_bookingses",
  },

  customers: {
    customersTable: "mbrm_dc_customerses",

    async getCustomerId(filter: string) {
      const selectValues = "mbrm_customersid";
      const data = await fetch<{
        mbrm_customernumber: string;
        mbrm_source: string;
        mbrm_subscription: boolean;
      }>(`/${this.customersTable}?$select=${selectValues}&$filter=${filter}`);
      return data;
    },
  },
  // <include-fragment fragment-id="filter-query-to-dollarSignFilter" />
  // <!--<include-fragment fragment-id="select-query-to-dollarSignSelect" />-->
  // <rewrite-uri template="/{{DC-Customer-Table-Name}}?$select=mbrm_customernumber" copy-unmatched-params="true" />
  // <set-variable name="returnItems" value="[&apos;mbrm_dc_customersid&apos;]" />
  // const { $api } = useNuxtApp()
  // const repo = repository($api);
  // const {data} = await useAsyncData(()=> repo.get())
});
