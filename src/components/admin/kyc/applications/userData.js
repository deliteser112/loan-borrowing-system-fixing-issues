import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

var userType = ["Borrower", "Coborrower", "Investor"];
var status = ["Not Completed", "Pending Approval", "Approved", "Rejected"];

const newPerson = () => {
  return {
    custName: faker.name.findName(),
    dsr: Math.floor(Math.random() * 100) + "%",
    applicationType: Math.floor(Math.random() * 2),
    userType: userType[Math.floor(Math.random() * 3)],
    kycStatus: status[Math.floor(Math.random() * 4)],
    action: "Validate NRIC"
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
