const jq = require('jq.js');

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

test('jq.js - get user names', () => {
  const filter = '.users[].name';
  const result = jq.run(filter, JSON.stringify(data), { output: 'json' });
  expect(result).toEqual(["John Doe", "Jane Smith"]);
});
