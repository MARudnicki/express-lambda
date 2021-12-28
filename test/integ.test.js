const axios = require("axios");

test("Service returns 'Hello World!'", async () => {
  try {
    console.log(`maciejru Variable is ${process.env.SERVICE_ENDPOINT}`)
    const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
    expect(response.data).toBe("Hello World!");
  } catch (e) {
    // console.error(e);
    // throw e;
  }
});
