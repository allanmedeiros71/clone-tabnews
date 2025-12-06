import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

async function status() {
  try {
    await query("SELECT 1");
    return "healthy";
  } catch (error) {
    return "error";
  }
}

async function getMaxConnections() {
  try {
    const maxConnections = await query("SHOW max_connections;");
    return maxConnections.rows[0].max_connections;
  } catch (error) {
    return null;
  }
}

async function getOpenedConnections() {
  try {
    const openedConnections = await query(
      "SELECT COUNT(*) FROM pg_stat_activity;",
    );
    return openedConnections.rows[0].count;
  } catch (error) {
    return null;
  }
}

export default {
  query: query,
  status: status,
  getMaxConnections: getMaxConnections,
  getOpenedConnections: getOpenedConnections,
};
