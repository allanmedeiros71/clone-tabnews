import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT
    ? parseInt(process.env.POSTGRES_PORT, 10)
    : undefined,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

/**
 * Execute a query using the shared pool.
 * Accepts the same parameters as `pg`'s `pool.query`.
 * Returns the raw result object from `pg`.
 */
async function query(queryTextOrConfig, params) {
  return pool.query(queryTextOrConfig, params);
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

async function getServerVersion() {
  try {
    const res = await query("SHOW server_version;");
    const value = res?.rows?.[0]?.server_version;
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
    const value = res?.rows?.[0]?.max_connections;
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
    const res = await query("SELECT COUNT(*) FROM pg_stat_activity;");
    const value = res?.rows?.[0]?.count;
    return value == null ? null : parseInt(value);
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
