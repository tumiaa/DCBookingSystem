
### Running TODO list (new)

- [ ] [tech] change to SCSS (or maybe tailwind?)
- [ ] [privacy!] add a 'we will use your information for xyz' privacy notice to the top of the form
- [ ] [privacy!] DO NOT SET MARKETING TO DEFAULT TO TRUE
- [ ] [privacy!] Special requirements box - either use a message to indicate users should not enter in sensitive information into the box, or switch it to a dropdown (e.g. medical condition - requires transport assistance, etc)
- [ ] [privacy!] Add a confirmation checkbox to say that they agree to the use of their information- submit button should be disabled unless it's checked.
- [ ] [security!] all APIs are authenticated
- [ ] [security!] all APIs are debounced or throttled
- [ ] [security!] all APIs can handle bot-defence (captcha?)


#### -- Form Item Changes --

- [ ] [req] Add the optional Accreditation number field (only if the tourtype is school)
- [ ] [req] Make the confirm checkbox when choosing the bus option for travelmethod actually be required
- [ ] [req] Ensure that the form changes based upon tourtype (e.g. fields, 'school name' should be 'organisation name' for community tours)
- [ ] [req] Maximum number of attendees should not exceed the chosen tourtype [see: getTourNames](#apigettournames)
- [ ] [req] Modify the maxNum limit of the subform to match the tour's maxnum (if it doesn't exist, 90) [see: getTourNames](#apigettournames)

- [ ] [req] On submission, create a new row in the Email table, based upon the config info in the config table [see: createEmail](#apicreateemail)
- [ ] [req] Actually use the dropdown options table for the dropdown options [see: getDropdownOptions](#apigetdropdownoptions)
- [ ] [security] Modify APIs to check against schemas to ensure we're only giving and getting back things in the shape we expect



#### -- API/createBooking --
- [ ] [req] creates a booking item in the table, containing the customerID link and tourID link.
- [ ] [security][later] generates and adds a hash as per cybersec guidelines and includes it when booking item is made
- [ ] [req] returns nothing

#### -- API/getEmailConfig --
- [ ] make the getEmailConfig API

#### -- API/createEmail --

[prereq: getEmailConfig](#apigetemailconfig)

- [ ] make the createEmailPostData function to construct the required fields using the email config (using Julie's PowerFX formula as reference)
- [ ] make the createEmail API that posts to the Email table
- [ ] call the createEmailPostData on submission, call the createEmail API with the constructed postdata

#### -- API/getTourNames --

- [ ] [req] Modify the getTourNames API to also return the maxNumAttendees field if it exists
- [ ] [clean] Probably rename this API

#### -- API/getDropdownOptions --

(needs to be defined better)

- [ ] create the individual getDropDownOptions APIs to get the needed data (e.g. HowDidYouHearAboutUs options, travelMethod options)

#### -- API/updateCustomer --

- [ ] [security] Only takes in a customerID param with a marketing answer, and only allows that as postdata
- [ ] [security] Does not return anything

#### -- API/getCustomerID --

- [ ] [security] Needs all required fields to be provided in the body/query params (e.g. it won't allow you to get customerId by just having {firstname: John})
- [ ] [req] Checks fields (excl. marketingq and howdidyouhear) against customer table - if there's a match, return customer uuid and marketingq response. If marketingq != formdata marketingq, run [updateCustomer](#apiupdatecustomer)

#### -- API/createCustomer --
- [ ] [req] creates a customer record with the provided customer data
- [ ] [security] returns only the customer uuid


#### -- UX/UI Security Related --

- [ ] [sec] **Actual form validation (important, this is the only thing preventing dirty data)**
  - [ ] [sec] Implement form validation
  - [ ] [sec] Implement form validation messages
  - [ ] [sec] Ensure that the dates in the datepicker are in the future (and possibly limit how far into the future)
  - [ ] [sec] Ensure that the chosen people size is smaller than the chosen tour max

#### -- Good UX/UI --

- [ ] [ux]Make the date picker/multi date picker less annoying/ugly
- [ ] [ux]Make the address inputs less annoying/ugly
- [ ] [ux] Change the layout of these date pickers to be better (maybe 1 row for wantedDate, 1 row for the two backup dates?)

#### -- Bugs --

- [ ] [bug] Unbreaking the form formatting (why css why)
- [ ] [bug] Check store for unnecessary repeat calls
  <br>

#### -- Good Code --

- [ ] [clean] Clean up CSS
- [ ] [clean] Add comment blocks to functions where necessary
