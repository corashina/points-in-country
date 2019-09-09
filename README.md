# points-in-country [![NPM:](https://img.shields.io/npm/v/points-in-country.svg)](https://www.npmjs.com/package/points-in-country) [![Build Status](https://api.travis-ci.org/corashina/points-in-country.svg)](https://travis-ci.org/corashina/points-in-country) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/corashina/points-in-country/blob/master/LICENSE)

Generate list of points within a country

# Input
Parameters: (country, interval)

`country` requried

`interval` optional **0.1 by default**

eg. `points-in-country('Russia', 1)`

# Output
Two dimensional array of points
```
[
    [lat, lon]
    [lat, lon]
    [lat, lon]
    ...
]
```
# Usage
```
const pic = require('points-in-country')

const points = pic('Latvia', 0.1)

console.log(points) 
// [ 
//   [ 26.26859785200015, 55.76699086600011 ], 
//   [ 26.36859785200015, 55.76699086600011 ], 
//   [ 26.46859785200015, 55.76699086600011 ],
//   ... 
// ]
```

# Available countries

Total countries **206**

|            |            |            |            |            |
|:----------:|:----------:|:----------:|:----------:|:----------:|
| Afghanistan | Central African Republic | Greenland | Palestine | South Sudan |
| Akrotiri Sovereign Base Area | Chad | Grenada | Panama | Spain |
| Aland | Chile | Guam | Papua New Guinea | Spratly Islands |
| Albania | China | Guatemala | Paraguay | Sudan |
| Algeria | Clipperton Island | Guernsey | Peru | Suriname |
| American Samoa | Colombia | Guinea | Philippines | Swaziland |
| Andorra | Comoros | Guinea Bissau | Pitcairn Islands | Sweden |
| Angola | Cook Islands | Guyana | Poland | Switzerland |
| Anguilla | Coral Sea Islands | Haiti | Portugal | Syria |
| Antarctica | Costa Rica | Heard Island and McDonald Islands | Puerto Rico | Taiwan |
| Antigua and Barbuda | Croatia | Honduras | Qatar | Tajikistan |
| Argentina | Cuba | Hong Kong S.A.R. | Republic of Congo | Thailand |
| ArmeniaAruba | Curaçao | Hungary | Republic of Serbia | The Bahamas |
| Ashmore and Cartier Islands | Cyprus | Iceland | Romania | Togo |
| Australia | Czech Republic | India | Russia | Tonga |
| Austria | Democratic Republic of the Congo | Indian Ocean Territories | Rwanda | Trinidad and Tobago |
| Azerbaijan | Denmark | Indonesia | Saint Barthelemy | Tunisia |
| Bahrain | Djibouti | Iran | Saint Helena | Turkey |
| Bajo Nuevo Bank (Petrel Is.) | Dominica | Iraq | Saint Kitts and Nevis | Turkmenistan |
| Bangladesh | Dominican Republic | Ireland | Saint Pierre and Miquelon | Turks and Caicos Islands |
| Barbados | East Timor | Isle of Man | Saint Vincent and the Grenadines | Tuvalu |
| Baykonur Cosmodrome | Ecuador | Israel | Samoa | Uganda |
| Belarus | Egypt | Italy | San Marino | Ukraine |
| Belgium | El Salvador | Ivory Coast | Sao Tome and Principe | United Arab Emirates |
| Belize | Equatorial Guinea | Jamaica | Saudi Arabia | United Kingdom |
| Benin | Eritrea | Japan | Scarborough Reef | United Republic of Tanzania |
| Bermuda | Estonia | Jersey | Senegal | United States Minor Outlying Islands |
| Bhutan | Ethiopia | Jordan | Serranilla Bank | United States of America |
| Bolivia | Falkland Islands | Kazakhstan | Seychelles | United States Virgin Islands |
| Bosnia and Herzegovina | Faroe Islands | Kenya | Siachen Glacier | Uruguay |
| Botswana | Federated States of Micronesia | Kiribati | Sierra Leone | US Naval Base Guantanamo Bay |
| Brazil | Fiji | Kosovo | Singapore | Uzbekistan |
| British Indian Ocean Territory | Finland | Kuwait | Sint Maarten | Vanuatu |
| British Virgin Islands | France | Kyrgyzstan | Slovakia | Vatican |
| Brunei | French Polynesia | Laos | Slovenia | Venezuela |
| Bulgaria | French Southern and Antarctic Lands | Lebanon | Solomon Islands | Vietnam |
| Burkina Faso | Gabon | Liberia | Somalia | Wallis and Futuna |
| Burundi | Gambia | Libya | Somaliland | Western Sahara |
| Cambodia | Georgia | Northern Cyprus | South Africa | Yemen |
| Cameroon | Germany | North Korea | South Georgia and South Sandwich Islands |  |
| Canada | Ghana | Oman | South Korea |  |
| Cape Verde | Gibraltar | Pakistan | Zambia |  |
| Cayman Islands | Greece | Palau | Zimbabwe |  |

# License
MIT License

Copyright (c) 2019 Tomasz Zielinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
