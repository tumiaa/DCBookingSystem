# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



### Running TODO list (new)
- [ ] [tech] change to SCSS (or maybe tailwind?)

### Running TODO list (pre-nuxt)

#### -- Requirements Related --

- [ ] [req]**On submission, create a new row in the Email table, based upon the config info in the config table**
      <br>
    - [ ] make the getEmailConfig API in APIM
      <br>
    - [ ] make the createEmailPostData function to construct the required fields using the email config (using Julie's PowerFX formula as reference)
      <br>
    - [ ] make the createEmail API in APIM that posts to the Email table
      <br>
    - [ ] call the createEmailPostData on submission, call the createEmail API with the constructed postdata
      <br>
- [ ] [req] **Add the optional Accreditation number field (only if the tourtype is school)**
      <br>
- [ ] [req] **Make the confirm checkbox when choosing the bus option for travelmethod actually be required**
      <br>
- [ ] [req]**Ensure that the form changes based upon tourtype (e.g. fields, 'school name' should be 'organisation name' for community tours)**
      <br>

- [ ][req]**Maximum number of attendees should not exceed the chosen tourtype**
      <br>
    - [ ][req] Modify the getTourNames API to also return the maxNumAttendees field if it exists
      <br>
    - [ ] [req] Modify the maxNum limit of the subform to match the tour's maxnum (if it doesn't exist, 90)
      <br>

- [ ][req] **Actually use the dropdown options table for the dropdown options**
      <br> - [ ] create the individual getDropDownOptions APIs to get the needed data (e.g. HowDidYouHearAboutUs options, travelMethod options)
      <br> - [ ] call these APIs on load, and use them as dropdown options

<br>

#### -- UX/UI Security Related --

- [ ][sec] **Actual form validation (important, this is the only thing preventing dirty data)**
  - [ ][sec] Implement form validation
  - [ ][sec] Implement form validation messages
  - [ ][sec] Ensure that the dates in the datepicker are in the future (and possibly limit how far into the future)
  - [ ][sec] Ensure that the chosen people size is smaller than the chosen tour max
        <br>
- [ ][sec] **Modify the updateCustomer API to only allow the modification of subscription field**
      <br>
- [ ][sec] **Modify the getCustomerID API to only get the id if you provide all compulsory fields (e.g. it won't allow you to get customerId by just having {firstname: John})**
      <br>
- [ ][sec] **Modify APIs to check against schemas to ensure we're only giving and getting back things in the shape we expect**

<br>

#### -- Good UX/UI --

- [ ][ux] **Make the date picker/multi date picker less annoying/ugly**
      <br>
- [ ][ux] **Change the layout of these date pickers to be better (maybe 1 row for wantedDate, 1 row for the two backup dates?)**
<br>

#### -- Bugs --

- [ ][bug] Unbreaking the form formatting (why css why)
- [ ][bug] Fix the axios call encoding problem (!important)~~
- [ ][bug] Check store for unnecessary repeat calls
<br>

#### -- Good Code --

- [ ][clean] Clean up CSS
- [ ][clean] Add comment blocks to functions where necessary
