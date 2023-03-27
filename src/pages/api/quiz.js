import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // creates connection from app to db
  const prisma = new PrismaClient();

  //if a post req is sent to the api
  if (req.method === 'POST') {
    const body = req.body;

    // stores user email in a variable
    let userEmail = body.email;

    // looks for user that corresponds to email in db
    let user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    // initializes an array of the answers from each of the four questions in terms of which house was chosen
    const resultsArray = [];
    resultsArray.push(
      `${body.foo}`,
      `${body.foo2}`,
      `${body.foo3}`,
      `${body.foo4}`,
    );

    // logic to figure out which house has most points
    const store = {};
    resultsArray.forEach((num) =>
      store[num] ? (store[num] += 1) : (store[num] = 1),
    );

    //assign result to house

    let house = Object.keys(store).sort((a, b) => store[b] - store[a])[0];

    // creates new entry in UserHouse with user and house

    let userHouse = await prisma.UserHouse.create({
      data: {
        userId: user.id,
        house: house,
      },
    });

    // send response to POST req back
    res.status(200).json({
      data: `${house}`,
    });
  }
}
