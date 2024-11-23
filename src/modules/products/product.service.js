const db = require("../../config/db");

const createProduct = async ({ name, price, count }) => {
  const [result] = await db.execute(
    "INSERT INTO product (name, price, count) values (?,?, ?)",
    [name, price, count]
  );

  return { id: result.insertId, name, price, count };
};

const listProduct = async (data) => {
  console.log("prueba");
};

const listbyProduct = async (data) => {
  console.log("prueba");
};

const updateproduct = async (data) => {
  console.log("prueba");
};

const deleteProduct = async (data) => {
  console.log("prueba");
};

module.exports = {
  createProduct,
  listProduct,
  listbyProduct,
  updateproduct,
  deleteProduct,
};
