const nodemailer = require("nodemailer");

async function enviarMail() {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "jorge.jlpm987@gmail.com", // generated ethereal user
      pass: "zvdhpgddiyvbigaa", // generated ethereal password
    },
  };
  const mensaje = {
    from: '"Fred Foo 👻" <jorge.jlpm987@gmail.com>', // sender address
    to: "jorge.jlpm987@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje)
  console.log(info);

}
enviarMail()



