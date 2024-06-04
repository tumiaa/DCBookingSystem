import { Country, State } from "~/types/country";
import { countryStateList } from "../countries";
import { uniqWith, isEqual } from "lodash-es";
export default defineEventHandler((event) => {
  const countryList_raw = countryStateList.map((stateItem) => {
    return {
      country_id: stateItem.country_id,
      country_name: stateItem.country_name,
    };
  });

  const countryList = uniqWith(countryList_raw, (a, b) => {
    return isEqual(a, b);
  });

  const countryListWithStates: Country[] = countryList.map((countryItem) => {
    const stateItems: State[] = countryStateList
      .filter(
        (item) =>
          item.country_name.toLowerCase() ===
          countryItem.country_name.toLowerCase()
      )
      .map((state) => {
        return { code: state.state_code, name: state.name };
      });

    return {
      ...countryItem,
      states: stateItems,
    };
  });

  return countryListWithStates;
});
