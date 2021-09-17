const { CronJob } = require("cron");

const remoteJobsScrapper = require("./scrapper");

console.log("Scheduler Started");
const fetchRemoteJobsJob = new CronJob("0 0 * * *", async () => {
  console.log("Fetching new Remote Jobs...");
  await remoteJobsScrapper.run();
  console.log("Jobs: ", jobs);
});
fetchRemoteJobsJob.start();
