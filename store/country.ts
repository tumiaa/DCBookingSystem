import type { SelectOptionsValues } from "~/components/form-item/FormItem";
import type { Country, State } from "~/types/country";

export const useCountryStore = defineStore("country", () => {
  const countryData: Ref<Country[]> = ref([]);
  async function getCountryOptions(): Promise<SelectOptionsValues> {
    const countryList = await getCountryData();
    console.log(countryList);
    return countryList?.map((c) => ({
      value: c.country_id,
      displayValue: c.country_name,
    }));
  }

  async function getStateOptions(countryName: string):Promise<SelectOptionsValues> {
    const countryList: Country[] = await getCountryData();
    const countryItem = countryList.find(
      (c: Country) =>
        c.country_name?.toLowerCase() == countryName?.toLowerCase()
    );
    const stateList: State[] = countryItem?.states ?? [];

    return stateList.map((s) => ({ value: s.code, displayValue: s.code }));
  }

  async function getCountryData(): Promise<Country[]> {
    console.log("getCountryData", countryData.value);
    if (!countryData.value || countryData.value.length < 1) {
      countryData.value = await $fetch("/api/getCountries");
    }
    return countryData.value;
  }

  return { getStateOptions, getCountryOptions };
});
