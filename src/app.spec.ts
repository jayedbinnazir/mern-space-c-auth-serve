import app from "./app";
import { calculateDiscount } from "./utils";
import request from "supertest";

describe("App", () => {
  it("shuld calculate the discount", () => {
    let result = calculateDiscount(60, 10);
    expect(result).toBe(6);
  });

  it("should return status code 200", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});
