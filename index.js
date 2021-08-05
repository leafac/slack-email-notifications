if (process.env.NODE_ENV !== "production") require("dotenv").config();
const { App } = require("@slack/bolt");
const sgMail = require("@sendgrid/mail");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.message(async ({ message }) => {
  console.log("Sending email…");
  try {
    await sgMail.send({
      to: "slack@leafac.com",
      from: "sendgrid@leafac.com",
      subject: "There are new messages on Slack",
      text: "There are new messages on Slack",
    });
  } catch (error) {
    console.error(error.response.body);
  }
});

(async () => {
  await app.start(process.env.PORT ?? 3000);

  console.log("Slack Sucks 🤬");
})();
