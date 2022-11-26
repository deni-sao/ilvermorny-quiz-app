import { PrismaClient } from '@prisma/client';
import bcrypt, { hash } from 'bcrypt';

export default async (req, res) => {
  const prisma = new PrismaClient();

  const { email, password } = req.body;

  let user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  let hashedPassword = await bcrypt.hash(password, 10).then(function (hash) {
    return hash;
  });

  if (user) {
    let dbPassword = user.pwdId;
    console.log('***#*@**@#*@*@*#*@#*#@*@*');
    console.log('***#*@**@#*@*@*#*@#*#@*@*');

    console.log(dbPassword);

    let isSamePass = await bcrypt
      .compare(password, dbPassword)
      .then(function (result) {
        return result;
      });

    console.log(isSamePass);

    if (isSamePass) {
      res.json(user);
    } else {
      res.status(403);
      res.send(false);
    }
  }

  if (user) {
    return res.end();
  }

  if (hashedPassword) {
    user = await prisma.user.create({
      data: {
        email: email,
        pwdId: hashedPassword,
      },
    });
  }

  res.end();
};
