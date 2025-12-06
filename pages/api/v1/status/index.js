import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseStatus = await database.status();
  const maxConnections = await database.getMaxConnections();
  const openedConnections = await database.getOpenedConnections();
  response.status(200).json({
    updated_at: updatedAt,
    dependency_check: {
      database: {
        status: databaseStatus,
        max_connections: maxConnections,
        opened_connections: openedConnections,
      },
    },
  });
}

export default status;
