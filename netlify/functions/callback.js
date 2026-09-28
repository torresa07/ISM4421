// Acknowledges Suno task callbacks. The front end polls for results, so nothing is stored here.
exports.handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ code: 200, msg: "received" }),
});
