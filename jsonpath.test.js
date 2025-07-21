const jsonpath = require('jsonpath');

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

test('jsonpath - get user names', () => {
  const filter = '$.users[*].name';
  const result = jsonpath.query(data, filter);
  expect(result).toEqual(["John Doe", "Jane Smith"]);
}); 