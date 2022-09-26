const {Router} = require ('express');
const { async } = require('rxjs');
const nodemailer = require('nodemailer')

const router = Router();

let data = {};


router.post('/prueba', async (req, res) => {
  console.log(req.body)
  res.status(200).json(req.body)

})


router.post('/send-mail', async (req, res) =>{
  let { name, email, phone, company, rank, helpYou, product,metas, time } = req.body
  console.log(req.body);
  contentHTML= `
    <h1>Nuevo Registro en Vi-ain</h1>
    <ul>
      <li>Nombre: ${name}</li>
      <li>email: ${email}</li>
      <li>Telefono: ${phone}</li>
      <li>Compañia: ${company}</li>
      <li>Cargo de la empresa: ${rank}</li>
      <li>Como podemos ayudarte: ${helpYou}</li>
      <li>Producto: ${product}</li>
      <li>Metas: ${metas}</li>
      <li>Linea de tiempo: ${time}</li>

    </ul>
  `;


  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "jorge.jlpm987@gmail.com", // generated ethereal user
      pass: "zvdhpgddiyvbigaa", // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: 'Vi-ain" <jorge.jlpm987@gmail.com>', // sender address
    to: "jorge.jlpm987@gmail.com", // list of receivers
    subject: "Nuevo registro en vi-ain", // Subject line
    html: contentHTML, // html body
  });



  //res.send("recibido")
  console.log("Message send", info.messageID)
  res.status(200).json({
    response: 'todo chevere mi pana'
  })

});

module.exports = router;

