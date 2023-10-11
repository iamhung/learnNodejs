const connection = require("../config/datatbase");

const getAllUsers = async () => {
  let [results, fields] = await connection
    .promise()
    .query("select * from Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection
    .promise()
    .query("select * from Users where id = ?", [userId]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, city, name, userId) => {
  let [results, fields] = await connection.promise().query(
    `
        UPDATE Users
        SET email = ?, city = ?, name = ?
        WHERE id = ?
        `,
    [email, city, name, userId]
  );
  return results;
};

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.promise().query(
        `
        delete from Users where id = ?;
        `
        ,[userId]
        );
    return results;

}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
