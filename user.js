const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Carol White', email: 'carol@example.com' }
];

function getUserList() {
  return users;
}

function getUserById(id) {
  return users.find(user => user.id === id);
}

function addUser(name, email) {
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  return newUser;
}

module.exports = { getUserList, getUserById, addUser };