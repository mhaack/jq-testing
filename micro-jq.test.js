const microJq = require('@elastic/micro-jq');

const data = {
  "users": [
    {
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com"
    },
    {
      "name": "Jane Smith",
      "age": 25,
      "email": "jane.smith@example.com"
    }
  ]
};

test('@elastic/micro-jq - get user names', () => {
  const filter = '.users[].name';
  const result = microJq.executeScript(data, filter);
  expect(result).toEqual(["John Doe", "Jane Smith"]);
}); 