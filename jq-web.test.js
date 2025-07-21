const jqWeb = require('jq-web');

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

test('jq-web - get user names', async () => {
  const filter = '.users[].name';
  const jq = await jqWeb;
  const result = jq.json(data, filter);
  expect(result).toEqual(["John Doe", "Jane Smith"]);
}); 