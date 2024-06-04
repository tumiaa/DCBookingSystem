import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { SelectOptionsValues } from "~/components/form-item/FormItem";

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(url: string): Promise<string> {
    return fetch<string>(url);
  },

  // tours: {
    async getTourNames(type: string): Promise<SelectOptionsValues> {
      console.log(type);
      const data = await fetch<SelectOptionsValues>(
        "/api/getTours/:type",
        { params: { type } }
      );

      return data.map((m: any) => ({
        displayValue: m.mbrm_tourname,
        value: m.mbrm_tournumber,
      }));
    },
  // },

  customers: {
    async getCustomerId(filter: string) {
      //TODO: below logic should go in the api def, not here
      // const selectValues = "mbrm_customersid";
      // const data = await fetch<{
      //   mbrm_customernumber: string;
      //   mbrm_source: string;
      //   mbrm_subscription: boolean;
      // }>(`/${this.customersTable}?$select=${selectValues}&$filter=${filter}`);
      // return data;
    },
  },
});
