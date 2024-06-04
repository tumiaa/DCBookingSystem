import type { SelectOptionValue } from "./form-item/FormItem";
export type DropdownHandler = { open: () => void; close: () => void };
export type SelectHandler = { select: (selectedOpt: SelectOptionValue) => void };
export type HighlightHandler = {
  next: () => void;
  previous: () => void;
  select: () => void;
};

export interface ComboboxContext {
  highlightedIndex: Ref<number>;
  filteredOptions: Ref<any[]>;
  inputDisplayValue: Ref<string>;
  isDropdownOpen: Ref<boolean>;
}

// export interface ComboboxHandlers {
//   dropdown: DropdownHandler;
//   highlight: HighlightHandler;
//   select: SelectHandler;
// }

//Select
const selectOption = (
  selectedOpt: SelectOptionValue,
  ctx: ComboboxContext,
  dropdownHandler: DropdownHandler
) => {
  ctx.inputDisplayValue.value = selectedOpt.displayValue;
  dropdownHandler.close();
};

export const createSelectHandler = (
  ctx: ComboboxContext,
  dropdownHandler: DropdownHandler
): SelectHandler => ({
  select: (selectedOpt: SelectOptionValue) =>
    selectOption(selectedOpt, ctx, dropdownHandler),
});

//Highlight
const highlightNext = (
  highlightedIndex: Ref<number>,
  filteredOptions: Ref<any[]>
) => {
  if (highlightedIndex.value < filteredOptions.value.length - 1) {
    highlightedIndex.value++;
  }
};

const highlightPrevious = (highlightedIndex: Ref<number>) => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--;
  }
};

const selectHighlighted = (
  highlightedIndex: Ref<number>,
  filteredOptions: Ref<any[]>,
  selectHandler: SelectHandler
) => {
  if (highlightedIndex.value !== -1) {
    selectHandler.select(filteredOptions.value[highlightedIndex.value]);
  }
};

export const createHighlightHandler = (
  ctx: ComboboxContext,
  selectHandler: SelectHandler
): HighlightHandler => ({
  next: () => highlightNext(ctx.highlightedIndex, ctx.filteredOptions),
  previous: () => highlightPrevious(ctx.highlightedIndex),
  select: () =>
    selectHighlighted(ctx.highlightedIndex, ctx.filteredOptions, selectHandler),
});

//Dropdown
const closeDropdown = (isDropdownOpen: Ref<boolean>) => {
  isDropdownOpen.value = false;
};

const openDropdown = (isDropdownOpen: Ref<boolean>) => {
  isDropdownOpen.value = true;
};

export const createDropdownHandler = (ctx: ComboboxContext): DropdownHandler => ({
  open: () => openDropdown(ctx.isDropdownOpen),
  close: () => closeDropdown(ctx.isDropdownOpen),
});
