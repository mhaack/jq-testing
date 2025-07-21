const jsonpathPlus = require('jsonpath-plus');

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

test('jsonpath-plus - get user names', () => {
  const filter = '$.users[*].name';
  const result = jsonpathPlus.JSONPath({ path: filter, json: data });
  expect(result).toEqual(["John Doe", "Jane Smith"]);
}); 