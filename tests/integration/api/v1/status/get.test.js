test("GET para /api/v1/status deve retornar status code 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  console.log(responseBody);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependency_check).toBeDefined();
  expect(responseBody.dependency_check.database).toBeDefined();
  expect(responseBody.dependency_check.database.status).toBeDefined();
  expect(responseBody.dependency_check.database.max_connections).toBeDefined();
  expect(
    responseBody.dependency_check.database.opened_connections,
  ).toBeDefined();
  expect(responseBody.dependency_check.database.status).toEqual("healthy");
  expect(typeof responseBody.dependency_check.database.max_connections).toBe(
    "string",
  );
  expect(typeof responseBody.dependency_check.database.opened_connections).toBe(
    "string",
  );
});
