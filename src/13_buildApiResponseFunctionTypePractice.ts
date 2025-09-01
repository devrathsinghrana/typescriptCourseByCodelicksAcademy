// helper method to generate API response objects
function buildResponse<B, D>(base: B, data: D): B & D {
  return {
    ...base,
    ...data,
  };
}

const response1 = buildResponse({ status: 200 }, { data: "OK" });
const response2 = buildResponse({ status: 404 }, {});
const response3 = buildResponse({}, { message: "Not Found" });
const response4 = buildResponse(
  { status: 500, error: "Server Error" },
  { retry: true, timeout: 3000 }
);
