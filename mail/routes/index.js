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
    <h1>VI ain </h1>
    <ul>
      <li>Nombre: ${name}</li>
      <li>email: ${email}</li>

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
    from: '"Fred Foo 👻" <jorge.jlpm987@gmail.com>', // sender address
    to: "jorge.jlpm987@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: contentHTML, // html body
  });



  //res.send("recibido")
  console.log("Message send", info.messageID)
  res.status(200).json({
    response: 'todo chevere mi pana'
  })

});

module.exports = router;

