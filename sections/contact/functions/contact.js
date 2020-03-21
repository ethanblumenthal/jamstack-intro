require("dotenv").config();

exports.handler = (event, _context, callback) => {
  const mailgun = require("mailgun-js");
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  });

  const { name, email, subject, body } = JSON.parse(event.body);
  const email = {
    from: `${name} <${email}>`,
    to: "Ethan Blumenthal <ethan.blumenthal@gmail.com>",
    subject,
    body
  };

  mg.messages().send(email, (err, res) => {
    callback(err, {
      statusCode: 200,
      body: JSON.stringify(res)
    });
  });
};
