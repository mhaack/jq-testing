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
  const filter = '[.users[].name]';
  const result = await jq.run(filter, JSON.stringify(data), { input: 'string', output: 'json' });
  expect(result).toEqual(["John Doe", "Jane Smith"]);
});
