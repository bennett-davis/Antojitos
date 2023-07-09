import sendgrid from "@sendgrid/mail";
import CateringEmailTemplate from "../../public/assets/catering-email-template";

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY);

export default async function SendEmail(req, res) {
    let emailTemplate = CateringEmailTemplate;
    emailTemplate = emailTemplate.replace("%NAME%", req.body.name);
    emailTemplate = emailTemplate.replace("%EMAIL_ADDRESS%", req.body.email);
    emailTemplate = emailTemplate.replace("%PHONE_NUMBER%", req.body.phone);
    emailTemplate = emailTemplate.replace("%EVENT_DATE%", req.body.eventDate);
    emailTemplate = emailTemplate.replace("%EVENT_TYPE%", req.body.eventType);
    emailTemplate = emailTemplate.replace("%CATERING_NEEDS%", req.body.cateringNeeds);

    await sendgrid.send({
        to: process.env.EMAIL_TO_ADDRESS,
        from: process.env.EMAIL_FROM_ADDRESS,
        subject: process.env.EMAIL_SUBJECT,
        html: emailTemplate
    });
}