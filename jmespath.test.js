const jmespath = require('jmespath');

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

test('jmespath - get user names', () => {
  const filter = 'users[*].name';
  const result = jmespath.search(data, filter);
  expect(result).toEqual(["John Doe", "Jane Smith"]);
});
