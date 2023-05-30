import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY);

const emailTemplate = `
    <h1>New catering request</h1>
`;

export default async function SendEmail() {
    console.log(process.env.SEND_GRID_API_KEY);
    await sendgrid.send({
        to: process.env.EMAIL_TO_ADDRESS,
        from: process.env.EMAIL_FROM_ADDRESS,
        subject: process.env.EMAIL_SUBJECT,
        html: emailTemplate
    });
}