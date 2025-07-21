const jq = require('node-jq');

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

test('node-jq - get user names', async () => {
  const filter = '.users[].name';
  const result = await jq.run(filter, data, { output: 'json' });
  expect(JSON.parse(result)).toEqual(["John Doe", "Jane Smith"]);
});
