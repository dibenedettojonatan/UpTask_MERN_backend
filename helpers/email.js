import nodemailer from 'nodemailer'


export const emailRegistro = async ( datos) =>{
    const {nombre, email, token} = datos

    const transport = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
      });
      //Informacion de Email
      const info = await transport.sendMail({
        from: ' "UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Confirma tu cuenta',
        text: "Corfirma tu cuenta en UpTask",
        html:`
          <p>Hola: ${nombre} comprueba tu cuenta en UpTask</p>
          <p>Tu cuenta ya esta si lista, solo debes comprobarla en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar Cuenta</a> </p>
          <p>Si tu no creaste esta cuenta, puedes ingnorar el mensaje</p>
        `
      })
}

export const emailOlvidePassword = async ( datos) =>{
  const {nombre, email, token} = datos

  const transport = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
    });
    //Informacion de Email
    const info = await transport.sendMail({
      from: ' "UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
      to: email,
      subject: 'UpTask - Restablece tu Password',
      text: "Restablece tu Password",
      html:`
          <p>Hola: ${nombre} has solicitado reestablecer tu password </p>
          <p>sigue el siguiente enlace para generar un nuevo password: 
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> 
          <p>Si tu no solicitaste este email, puedes ingnorar el mensaje</p> 
      `
    })
}

