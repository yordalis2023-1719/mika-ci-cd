const request = require("supertest");
const app = require("../index");

describe("Prueba de la app", () => {
  it("Debe responder con mensaje en /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("¡Hola, CI/CD con GitHub Actions!");
  });
});
