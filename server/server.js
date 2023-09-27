const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Replace these with your actual email credentials
const emailConfig = {
  service: "Gmail",
  auth: {
    user: "jorgebernaldev@gmail.com",
    pass: "rehn dgzn fixx ycoy",
  },
};

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(emailConfig);

  // Email content
  const mailOptions = {
    from: "jibernalg@hotmail.com",
    to: "jorgebernaldev@gmail.com", // Your personal email address
    subject: "New Form Submission",
    text: `
      Name: ${formData.nombre}
      Email: ${formData.email}
      Phone: ${formData.telefono}
      Company: ${formData.empresa}
      Subject: ${formData.asunto}
      Services:
      - Presupuesto de obra: ${formData.presupuesto ? "Yes" : "No"}
      - Modelación Revit: ${formData.revit ? "Yes" : "No"}
      - Supervisión técnica: ${formData.supervision ? "Yes" : "No"}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Form submitted successfully");
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
