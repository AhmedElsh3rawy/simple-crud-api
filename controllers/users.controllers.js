import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const id = req.params.userId;
  const user = users.find((user) => user.id === id);

  res.send(user);
};

export const addUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });

  res.send(`The user with the name: ${user.firstName} added to the database`);
};

export const deleteUser = (req, res) => {
  const id = req.params.userId;
  users = users.filter((user) => user.id !== id);

  res.send(`The user with the id: ${id} deleted from the database`);
};

export const modifyUser = (req, res) => {
  const id = req.params.userId;
  const { firstName, lastName, age } = req.body;
  let user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`The user with the id: ${id} modified`);
};

export const updateUser = (req, res) => {
  const id = req.params.userId;
  users = users.filter((user) => user.id !== id);
  const user = req.body;
  users.push({ ...user, id: uuidv4() });

  res.send(`Updated`);
};
