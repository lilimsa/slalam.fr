function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { name, email, subject, message } = data;

  const recipient = "TON_EMAIL@gmail.com";

  const body = `Nouveau message depuis slalam.fr\n\n` +
    `Nom: ${name}\n` +
    `Email: ${email}\n` +
    `Sujet: ${subject}\n` +
    `Message:\n${message}`;

  GmailApp.sendEmail(recipient, `[Contact slalam.fr] ${subject}`, body);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return HtmlService.createHtmlOutput("OK");
}
