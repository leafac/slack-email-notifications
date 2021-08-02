require("dotenv").config();
const { App } = require("@slack/bolt");
const sgMail = require("@sendgrid/mail");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.message(async ({ message }) => {
  await sgMail.send({
    to: "slack@leafac.com",
    from: "sendgrid@leafac.com",
    subject: `Messages were sent at ${message.channel}`,
  });
});

(async () => {
  await app.start(process.env.PORT ?? 3000);

  console.log("Slack Sucks 🤬");
})();
