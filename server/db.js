const { emailValidation, passwordValidation } = require("./validator");
const bcrypt = require("bcryptjs"); // hash password

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "78231",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});



const getUser = async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    try {
      const { rows } = await pool.query(query, values);
      if (rows.length === 0) {
        res.status(404).json({
          error: "User not found",
        });
      }
      res.json(rows[0]);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };
  
  const createUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      let errors = {};
  
      if (!emailValidation(email)) {
        errors.email = "Email is invalid";
      }
      if (!passwordValidation(password)) {
        errors.password = "Password is invalid";
      }
  
      const isEmailInUse = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (isEmailInUse.rows.length > 0) {
        errors.emailInUse = "Email is already in use";
      }
  
      if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, hashedPassword]
      );
  
      res.json(newUser.rows[0]);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  };
  
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (user.rows.length === 0) {
        return res.status(404).json({
          error: {
            message: "User not found",
          },
        });
      }
      const isMatch = await bcrypt.compare(password, user.rows[0].password);
      if (!isMatch) {
        return res.status(401).json({
          error: {
            message: "Incorrect password",
          },
        });
      }
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };
  
 


  module.exports = {
    getUser,
    createUser,
    loginUser,
    pool
  };

  module.exports = pool;