const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");

async function main() {
  const consumer_key = core.getInput("CONSUMER-KEY");
  const consumer_token = core.getInput("CONSUMER-TOKEN");
  const candidate = core.getInput("CANDIDATE");
  const version = core.getInput("VERSION");
  const backend = core.getInput("BACKEND");

  const payload = {
    candidate: candidate,
    version: version,
  };

  const query_config = {
    method: "POST",
    url: `${backend}/default`,
    headers: {
      "Consumer-Key": consumer_key,
      "Consumer-Token": consumer_token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: payload,
  };

  const response = await axios(query_config);

  console.log(response.data);
}

main();
