<h1 align="center">Slack Email Notifications</h1>
<h3 align="center">Receive email notifications for public channels</h3>
<p align="center">
<a href="https://github.com/leafac/slack-email-notifications"><img src="https://img.shields.io/badge/Source---" alt="Source"></a>
</p>

### Support

- Recurring support on Patreon: <https://patreon.com/leafac>
- One-time support on PayPal: <https://paypal.me/LeandroFacchinetti>

### Problem

You may configure Slack to send an email notification for a direct message (when someone is talking to you privately) and when you’re `@mentioned` on a public channel, but Slack doesn’t send an email notification when regular conversation is happening on a public channel. If you’re part of a group that doesn’t talk too often, then you either have to install the Slack application and enable notifications in the application just for a notification once in a while, or you may miss some conversation.

This application is a Slack bot that listens for activity on public channels and sends you an email notification, **even if you aren’t `@mentioned`!**

### Deployment

### Local Development

`FROM`
`TO`
`SLACK_BOT_TOKEN`
`SLACK_SIGNING_SECRET`
`SENDGRID_API_KEY`
`SLACK_WORKSPACE`
`DEBOUNCE_DURATION`

Bot Token Scopes
channels:history

Subscribe to bot events
message.channels

`<url>/slack/events`

Install bot on channel
