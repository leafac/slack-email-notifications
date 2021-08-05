if (process.env.NODE_ENV !== "production") require("dotenv").config();
const slackBolt = require("@slack/bolt");
const sendgrid = require("@sendgrid/mail");

(async () => {
  const slack = new slackBolt.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  slack.message(async (event) => {
    console.log(JSON.stringify(event, undefined, 2));
    // console.log("Sending email...");
    // try {
    //   await sendgrid.send({
    //     to: "slack@leafac.com",
    //     from: "sendgrid@leafac.com",
    //     subject: "There are new messages on Slack",
    //     text: "There are new messages on Slack",
    //   });
    // } catch (error) {
    //   console.error(error.response.body);
    // }
  });

  await slack.start(process.env.PORT ?? 3000);

  console.log("Slack Email Notifications started...");
})();
