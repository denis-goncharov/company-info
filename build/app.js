'use strict';

var companyList = [{
  "name": "Aon Corporation",
  "cameraAdjuster": null,
  "address": "London, United Kingdom",
  "ownerName": "Patrick Ryan",
  "phone": "+1(619)1234314",
  "email": "office@aon.com",
  "signupDate": "03/24/2022",
  "eventsCounter": "12 124 242",
  "camerasCounter": 3,
  "employeeCounter": 2,
  "planName": "Test Plan 1",
  "planStatus": "Test Tariff 1"
}, {
  "name": "Nvidia Corp",
  "cameraAdjuster": null,
  "address": "Santa Clara, California, U.S.",
  "ownerName": "Jensen Huang",
  "phone": "+1(619)4234314",
  "email": "office@nvidia.com",
  "signupDate": "02/21/2022",
  "eventsCounter": "10 124 242",
  "camerasCounter": 1,
  "employeeCounter": 3,
  "planName": "Test Plan 2",
  "planStatus": "Test Tariff 2"
}, {
  "name": "Qualcomm Inc",
  "cameraAdjuster": null,
  "address": "San Diego, California, U.S.",
  "ownerName": "Public company",
  "phone": "+1(619)9234314",
  "email": "office@qualcomm.com",
  "signupDate": "01/12/2022",
  "eventsCounter": "9 124 242",
  "camerasCounter": 3,
  "employeeCounter": 12,
  "planName": "Test Plan 3",
  "planStatus": "Test Tariff 3"
}];

var e = React.createElement;

function App() {
  return companyList.map(function (item, idx) {
    return React.createElement(CompanyInfo, Object.assign({ key: idx }, item));
  });
}

var domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);