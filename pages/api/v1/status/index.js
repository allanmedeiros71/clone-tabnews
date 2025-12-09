import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseStatus = await database.getStatus();
  const serverVersion = await database.getServerVersion();
  const maxConnections = await database.getMaxConnections();
  const openedConnections = await database.getOpenedConnections();
  response.status(200).json({
    updated_at: updatedAt,
    dependency_check: {
      database: {
        status: databaseStatus,
        version: serverVersion,
        max_connections: maxConnections,
        opened_connections: openedConnections,
      },
    },
  });
}

export default status;
