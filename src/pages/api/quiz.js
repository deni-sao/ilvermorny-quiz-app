import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const body = req.body;
    // res.status(200).json({ data: `${body.foo} ${body.foo2} ${body.foo3}` });
    let userEmail = body.email;

    let user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    const resultsArray = [];
    resultsArray.push(
      `${body.foo}`,
      `${body.foo2}`,
      `${body.foo3}`,
      `${body.foo4}`,
    );

    const store = {};
    resultsArray.forEach((num) =>
      store[num] ? (store[num] += 1) : (store[num] = 1),
    );

    let house = Object.keys(store).sort((a, b) => store[b] - store[a])[0];

    let userHouse = await prisma.UserHouse.create({
      data: {
        userId: user.id,
        house: house,
      },
    });

    res.status(200).json({
      data: `${house}`,
    });

    // const body2 = JSON.stringify(req.body);
    // res.status(200).json({ body2 });
    // res.status(200).json({ name: 'John Doe' });
    // res.setHeader('Content-Type', 'application/json');
    // res.json({ query: req.query });
  }
  // else {
  //   // res.status(405).send({ message: 'Only POST requests allowed' });
  //   // return;
  // }
}
