if (process.env.NODE_ENV !== "production") require("dotenv").config();
const slackBolt = require("@slack/bolt");
const sendgrid = require("@sendgrid/mail");

(async () => {
  const slack = new slackBolt.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  let lastMessageTimestamp = 0;
  slack.message(async () => {
    const shouldSendEmail =
      Date.now() - lastMessageTimestamp <
      Number(process.env.DEBOUNCE_DURATION ?? 5 * 60 * 1000);
    lastMessageTimestamp = Date.now();
    if (shouldSendEmail)
      try {
        console.log("Sending email...");
        await sendgrid.send({
          from: process.env.FROM,
          to: process.env.TO,
          subject: `There are new messages on Slack${
            process.env.SLACK_WORKSPACE
              ? ` · ${process.env.SLACK_WORKSPACE}`
              : ""
          }`,
          text: ".",
        });
      } catch (error) {
        console.error(error.response.body);
      }
    else
      console.log(
        "Email received but ignored to prevent too many emails from being sent."
      );
  });

  await slack.start(process.env.PORT ?? 3000);

  console.log("Slack Email Notifications started...");
})();
