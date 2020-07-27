/*
Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets (< and >) are required for group name.

To extract the United States area code from a phone number, we could use:

let match = "(214) 987-6482".match(/\((?<area>\d\d\d)\)/)
console.log(match.groups.area) ➞ 214

Grab the year, month and day from a string of dates. Name your groups with year, month, and day and in that order in your expression. You only have to come up with the regular expression. The replace() function is already implemented in the test.

let REGEXP = your solution
let str = "2019-10-30, 2020-01-01"

str.replace(regexp, "$<day>.$<month>.$<year>") ➞ "30.10.2019, 01.01.2020"

Notes
-----------
    Dates do not go back before 1900.
    Dates always come in year-month-day format.
    Check the Resources tab if you get stuck.
*/
let REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g
