import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import mysql from "mysql2";

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL);

// simple query
connection.query("show tables", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra metadata about results, if available
});

// Example with placeholders
connection.query(
  "select 1 from dual where ? = ?",
  [1, 1],
  function (err, results) {
    console.log(results);
  }
);

connection.end();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
  },
});
