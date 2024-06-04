import type {
  GroupBookingFormData,
  GroupBookingSubformDataItem,
} from "@/types/booking";
import type {
  FormQDate,
  FormQInput,
  FormQRange,
  FormQSelect,
  FormQTextArea,
  FormQToggle,
  FormQuestion,
} from "../form-item/FormItem";

// function getCountries(lang = "en") {
//   const A = 65;
//   const Z = 90;

//   const countryName = new Intl.DisplayNames([lang], { type: "region" });
//   const countries: string[] = [];
//   for (let i = A; i <= Z; ++i) {
//     for (let j = A; j <= Z; ++j) {
//       const code = String.fromCharCode(i) + String.fromCharCode(j);
//       const name = countryName.of(code);

//       if (code !== name && name) {
//         // countries[code] = name
//         if (!countries.find((x) => x == name)) {
//           countries.push(name);
//         }
//       }
//     }
//   }
//   return countries;
// }

const groupBookingFields: FormFields = {
  firstName: {
    id: "firstName",
    label: "First name:",
    type: "input",
    placeholder: "Enter your first name here",
    required: true,
    maxWidth: 20,
  },
  lastName: {
    id: "lastName",
    label: "Last name:",
    type: "input",
    placeholder: "Enter your last name here",
    required: true,
  },

  email: {
    id: "email",
    label: "Email:",
    type: "input",
    placeholder: "Enter your email here",
    required: true,
  },
  phoneNumber: {
    id: "phoneNumber",
    label: "Phone number:",
    type: "input",
    placeholder: "Enter your phone number",
    required: true,
  },
  schoolName: {
    id: "schoolName",
    label: "School name:",
    type: "input",
    placeholder: "Enter your school name",
    required: true,
  },
  businessPhone: {
    id: "businessPhone",
    label: "School phone number (optional)",
    type: "input",
    placeholder: "",
    required: false,
  },
  addressStreet: {
    id: "addressStreet",
    label: "Street",
    type: "input",
    placeholder: "Enter your street number and name here",
    required: true,
  },
  addressCity: {
    id: "addressCity",
    label: "City:",
    type: "input",
    placeholder: "Enter your city here",
    required: true,
  },
  addressPostcode: {
    id: "addressPostcode",
    label: "Postcode/ZIP code:",
    type: "input",
    maxWidth: 2,
    required: true,
  },

  addressState: {
    id: "addressState",
    label: "State/Province",
    type: "combobox",
    maxWidth: 100,
    options: {
      defaultValue: "NSW",
      values: [{ value: "NSW", displayValue: "NSW" }],
    },
    required: true,
  },
  addressCountry: {
    id: "addressCountry",
    label: "Country:",
    type: "combobox",
    options: {
      defaultValue: "Australia",
      values: [],
    },
    required: true,
  },
  howDidYouHear: {
    id: "howDidYouHear",
    label: "How did you hear about us? (optional)",
    type: "select",
    options: {
      values: [
        { value: "", displayValue: "--Select an option--" },
        { value: "Internet", displayValue: "Internet" },
        { value: "Friend", displayValue: "Friend" },
        { value: "Family", displayValue: "Family" },
        { value: "School", displayValue: "School" },
        { value: "Other", displayValue: "Other" },
      ],
    },
    required: false,
  },
  sendMarketingEmail: {
    id: "sendMarketingEmail",
    label: "Would you like to hear about ANSTO?",
    required: true,
    type: "toggle",
  },
};
export type SubformFields = {
  tourType: FormQSelect<GroupBookingSubformDataItem>;
  attendanceNumber: FormQRange<GroupBookingSubformDataItem>;
  alternativeDates1: FormQDate<GroupBookingSubformDataItem>;
  alternativeDates2: FormQDate<GroupBookingSubformDataItem>;
  alternativeDates3: FormQDate<GroupBookingSubformDataItem>;
  onsiteTravelMethod: FormQSelect<GroupBookingSubformDataItem>;
  specialReq: FormQTextArea<GroupBookingSubformDataItem>;
};

export type FormFields = {
  firstName: FormQInput<GroupBookingFormData>;
  lastName: FormQInput<GroupBookingFormData>;
  email: FormQInput<GroupBookingFormData>;
  phoneNumber: FormQInput<GroupBookingFormData>;
  schoolName: FormQInput<GroupBookingFormData>;
  businessPhone: FormQInput<GroupBookingFormData>;
  addressStreet: FormQInput<GroupBookingFormData>;
  addressCity: FormQInput<GroupBookingFormData>;
  addressPostcode: FormQInput<GroupBookingFormData>;
  addressState: FormQSelect<GroupBookingFormData>;
  addressCountry: FormQSelect<GroupBookingFormData>;
  howDidYouHear: FormQSelect<GroupBookingFormData>;
  sendMarketingEmail: FormQToggle<GroupBookingFormData>;
};
const groupBookingSubformFields: SubformFields = {
  tourType: {
    id: "tourType",
    type: "combobox",
    required: true,
    label: "Tour type?",
    options: { values: [] },
  },
  attendanceNumber: {
    id: "attendanceNumber",
    type: "range",
    min: 1,
    max: 30,
    label: "How many students will be attending?",
    required: true,
    maxWidth: 1,
  },
  alternativeDates1: {
    id: "alternativeDates1",
    type: "date",
    label: "Booking date",
    required: true,
    maxWidth: 2,
  },

  alternativeDates2: {
    id: "alternativeDates2",
    type: "date",
    label: "Alternative dates 1",
    required: true,
    maxWidth: 1,
  },
  alternativeDates3: {
    id: "alternativeDates3",
    type: "date",
    label: "Alternative date 2",
    required: true,
    maxWidth: 1,
  },

  onsiteTravelMethod: {
    id: "onsiteTravelMethod",
    type: "select",
    options: {
      values: [
        {
          value: "We are booking a bus/coach for the day",
          displayValue: "We are booking a bus/coach for the day",
        },
        {
          value: "We will be driving to ANSTO in our own vehicles",
          displayValue: "We will be driving to ANSTO in our own vehicles",
        },
        { value: "We don't know yet", displayValue: "We don't know yet" },
      ],
    },
    required: true,
    label: "How will your group be travelling to ANSTO?",
  },
  specialReq: {
    id: "specialReq",
    type: "textarea",
    required: false,
    label: "Any special requirements?",
  },
};

const groupBookingDefaults: {
  form: GroupBookingFormData;
  subform: GroupBookingSubformDataItem;
} = {
  form: {
    firstName: "",
    lastName: "",
    addressCity: "",
    addressCountry: "",
    addressPostcode: "",
    addressState: "",
    addressStreet: "",
    businessPhone: "",
    sendMarketingEmail: true,
    email: "",
    phoneNumber: "",
    schoolName: "",
    howDidYouHear: "",
  },
  subform: {
    attendanceNumber: 1,
    alternativeDates1: "",
    alternativeDates2: "",
    alternativeDates3: "",
    onsiteTravelMethod: "",
    specialReq: "",
    tourType: "",
  },
};

const groupBookingFieldData = {
  form: groupBookingFields,
  subform: groupBookingSubformFields,
};

export { groupBookingFieldData, groupBookingDefaults };
