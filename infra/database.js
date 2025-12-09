import { Pool } from "pg";

// Create a shared Postgres connection pool.
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

/**
 * Execute a query against the database.
 * Returns the rows as an array, or null if no rows.
 */
async function query(queryTextOrConfig, params) {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(queryTextOrConfig, params);
    return result.rows ? result.rows : null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

/**
 * Check database connectivity.
 * Returns the string `"healthy"` when a simple query succeeds,
 * otherwise returns `"error"`.
 */
async function getStatus() {
  try {
    await query("SELECT 1");
    return "healthy";
  } catch (error) {
    return "error";
  }
}

/**
 * Return the database server version as a string, or null on error.
 */
async function getServerVersion() {
  try {
    const res = await query("SHOW server_version;");
    const value = res?.[0]?.server_version;
    return value == null ? null : String(value);
  } catch (error) {
    return null;
  }
}

/**
 * Return the configured maximum connections as a string, or null on error.
 */
async function getMaxConnections() {
  try {
    const res = await query("SHOW max_connections;");
    const value = res?.[0]?.max_connections;
    return value == null ? null : parseInt(value);
  } catch (error) {
    return null;
  }
}

/**
 * Return the number of opened connections as a string, or null on error.
 */
async function getOpenedConnections() {
  try {
    /**
     * The query counts the number of active connections to the current database.
     * Adjust the WHERE clause if you want to count connections to a different database.
     * ::int is used to cast the count to an integer.
     */
    const databaseName = process.env.POSTGRES_DB || "local_db";
    const res = await query({
      text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname=$1;",
      values: [databaseName],
    });
    const value = res?.[0]?.count;
    return value == null ? null : value;
  } catch (error) {
    return null;
  }
}

export default {
  query,
  getStatus,
  getServerVersion,
  getMaxConnections,
  getOpenedConnections,
};
