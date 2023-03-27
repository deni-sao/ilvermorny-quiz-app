import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [err, setErr] = useState('');
  const { data: session, status } = useSession();
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: session.user.email,
      foo: event.target.foo.value,
      foo2: event.target.foo2.value,
      foo3: event.target.foo3.value,
      foo4: event.target.foo4.value,
    };

    // Send the data to the server in JSON format.
    const jsonData = JSON.stringify(data);
    // alert(JSONdata);

    // API endpoint where we send form data.
    const endpoint = '/api/quiz';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: jsonData,
    };

    const hideForm = document.getElementById('answers');
    if (hideForm) {
      hideForm.className = 'hidden';
    }

    // Send the form data to our forms API and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    let houseID = result.data;

    switch (houseID) {
      case (houseID = 'house1'):
        const hornedserpent = document.getElementById('hornedserpent');
        if (hornedserpent) {
          hornedserpent.className = 'visible';
        }
        break;
      case (houseID = 'house2'):
        const pugwudgie = document.getElementById('pugwudgie');
        if (pugwudgie) {
          pugwudgie.className = 'visible';
        }
        break;
      case (houseID = 'house3'):
        const thunderbird = document.getElementById('thunderbird');
        if (thunderbird) {
          thunderbird.className = 'visible';
        }
        break;
      case (houseID = 'house4'):
        const wampus = document.getElementById('wampus');
        if (wampus) {
          wampus.className = 'visible';
        }
        break;
    }
  };
  return (
    <section
      className=" bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden justify-center flex "
      style={{
        backgroundImage: `url("/quizbg2.jpg")`,
      }}
    >
      <div className="flex flex-col py-36 items-center justify-center relative  bg-black overflow-hidden container mx-auto mix-w-full bg-opacity-30 rounded-4xl ">
        <form
          onSubmit={handleSubmit}
          method="post"
          id="answers"
          className="max-h max-w-sm flex flex-col items-start justify-center px-12 pt-12 pb-9 md:max-w-xl bg-black"
        >
          <h1 className="mb-3 text-5xl text-center text-white font-semibold leading-tight">
            Let the Sorting Ceremony Begin!
          </h1>
          <br />
          <span className="mb-11 pb-11 font-medium text-center  text-lg text-gray-400 leading-normal border-b border-white">
            Answer the following questions - and be careful! You must do so
            truthfully and carefully!
          </span>
          <br />
          <span className="text-white">
            What is your favorite type of weather?
          </span>
          <br />
          <div className="w-full">
            <input
              value="house1"
              type="radio"
              name="foo"
              id="answer0"
              className="peer/one hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer0"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/one:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              {' '}
              Rainy, with lots of grey clouds.
            </label>
            <br />
            <input
              value="house2"
              type="radio"
              name="foo"
              id="answer1"
              className="peer/two hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer1"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/two:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Sunny and serene.
            </label>
            <br />
            <input
              value="house3"
              type="radio"
              name="foo"
              id="answer2"
              className="peer/three hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer2"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/three:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Stormy, with an edge of danger.
            </label>
            <br />
            <input
              value="house4"
              type="radio"
              name="foo"
              id="answer3"
              className="peer/four hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer3"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/four:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Fresh morning weather.
            </label>
          </div>
          <br />

          <span className="text-white">Are you well organized?</span>
          <br />
          <div className="w-full">
            <input
              value="house4"
              type="radio"
              name="foo2"
              id="answer4"
              className="peer/five hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer4"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/five:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Absolutely not.
            </label>
            <br />
            <input
              value="house2"
              type="radio"
              name="foo2"
              id="answer5"
              className="peer/six hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer5"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/six:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Yes, very.
            </label>
            <br />
            <input
              value="house1"
              type="radio"
              name="foo2"
              id="answer6"
              className="peer/seven hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer6"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/seven:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              No, but I could be if I had to!
            </label>
            <br />
            <input
              value="house1"
              type="radio"
              name="foo2"
              id="answer7"
              className="peer/eight hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer7"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/eight:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              More organized than most.
            </label>
          </div>
          <br />

          <span className="text-white">
            Would you rather: save a House comrade from a fire or find the cure
            to a disease that is killing thousands?
          </span>
          <br />
          <div className="w-full">
            <input
              value="house2"
              type="radio"
              name="foo3"
              id="answer8"
              className="peer/nine hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer8"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/nine:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Find the cure.
            </label>
            <br />
            <input
              value="house1"
              type="radio"
              name="foo3"
              id="answer9"
              className="peer/ten hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer9"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/ten:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Save the comrade.
            </label>
            <br />
            <input
              value="house2"
              type="radio"
              name="foo3"
              id="answer10"
              className="peer/eleven hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer10"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/eleven:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              I don't know. Tough decision.
            </label>
            <br />
            <input
              value="house1"
              type="radio"
              name="foo3"
              id="answer10"
              className="peer/twelve hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer10"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/twelve:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Fire? I would run to save my own life. Safety comes first.
            </label>
          </div>
          <br />

          <span className="text-white">
            A loved one is drowning. Would you jump into the dangerous river
            after them?
          </span>
          <br />
          <div>
            {' '}
            className="w-full"
            <input
              value="house3"
              type="radio"
              name="foo4"
              id="answer11"
              className="peer/thirteen hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="answer11"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/thirteen:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Yes, without hesitation.
            </label>
            <br />
            <input
              value="house4"
              type="radio"
              name="foo4"
              id="foo"
              className="peer/fourteen hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="foo"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/fourteen:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              I would rather throw them a rope and pull them out with all my
              strength.
            </label>
            <br />
            <input
              value="house4"
              type="radio"
              name="foo4"
              id="foo"
              className="peer/fifteen hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="foo"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/fifteen:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              I would jump in and figure it out from there. I could probably
              swim whilst carrying the poor thing on my back.
            </label>
            <br />
            <input
              value="house3"
              type="radio"
              name="foo4"
              id="foo"
              className="peer/sixteen hover:bg-yellow-500 hidden"
            />
            <label
              htmlFor="foo"
              className="flex flex-col text-center p-4 border-2 border-yellow-500 cursor-pointer bg-white peer-checked/sixteen:bg-yellow-500 hover:border-yellow-600 rounded-lg "
            >
              Well...it sounds scary, but then, where is the fun in just
              standing there?
            </label>
          </div>
          <br />
          <br />
          <button className="button inline-block py-3 px-6 mb-2 w-full md:w-auto  text-lg leading-7 text-black font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm mx-auto">
            Get Sorted
          </button>
        </form>
        <div id="result">
          {/* Horned Serpent  */}
          <section
            id="hornedserpent"
            className="py-36 bg-blueGray-50 overflow-hidden hidden"
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
                <div className="w-full md:w-1/2 p-8 lg:p-14">
                  <div className="relative w-96 h-96 mx-auto lg:ml-auto lg:mr-0  rounded-4xl">
                    {/* <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/team/bg3.png" alt=""> */}
                    <Link href="/houses/hornedserpent">
                      <Image
                        className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000 cursor-pointer"
                        src="/horned-serpent.webp"
                        alt="Horned Serpent House logo"
                        width="350"
                        height="350"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 lg:p-14 bg-black">
                  <div className="w-3/4 h-full">
                    <h2 className="mb-8 text-xl text-amber-400 md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                      Horned Serpent!
                    </h2>
                    <p className="mb-7 text-lg font-medium text-white">
                      You are a student of Horned Serpent House! The Serpent has
                      chosen you, dear student, to represent his House for the
                      rest of your stay at Ilvermorny! What an honor! Clearly,
                      you must be a highly intelligent and studious individual,
                      for, if it were otherwise, the Horned Serpent might not
                      have even glanced your way! Go, then, go on! Join your
                      peers in the House of Horned Serpent, and do not forget:
                      You must look out for one another at all times...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pugwudgie */}

          <section
            id="pugwudgie"
            className="py-36 bg-blueGray-50 overflow-hidden hidden"
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
                <div className="w-full md:w-1/2 p-8 lg:p-14">
                  <div className="relative w-96 h-96 mx-auto lg:ml-auto lg:mr-0  rounded-4xl">
                    {/* <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/team/bg3.png" alt=""> */}
                    <Link href="/houses/pugwudgie">
                      <Image
                        className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000 cursor-pointer"
                        src="/pugwudgie.png"
                        alt="Pugwudgie House logo"
                        width="400"
                        height="400"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 lg:p-14 bg-black">
                  <div className="w-3/4 h-full">
                    <h2 className="mb-8 text-6xl text-amber-400 md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                      Pugwudgie!
                    </h2>
                    <p className="mb-7 text-lg font-medium text-white">
                      Your intelligence and independent spirit have impressed
                      Pugwudgie! You are fierce, tenacious and very kind! A
                      natural healer! These are the qualities that Pugwudgie
                      himself highly reveres. And what patron would not want
                      such a bright student as you to be in his House? With your
                      wits and determination, you will surely become top of your
                      House in no time! Congratulations on your Sorting and good
                      luck in your First Year! Hurrah!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* thunderbird */}

          <section
            id="thunderbird"
            className="py-36 bg-blueGray-50 overflow-hidden hidden"
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
                <div className="w-full md:w-1/2 p-8 lg:p-14">
                  <div className="relative w-96 h-96 mx-auto lg:ml-auto lg:mr-0  rounded-4xl">
                    <Link href="/houses/thunderbird">
                      <Image
                        className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000 cursor-pointer"
                        src="/thunderbird.webp"
                        alt="Thunderbird house logo"
                        width="400"
                        height="400"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 lg:p-14 bg-black">
                  <div className="w-3/4 h-full">
                    <h2 className="mb-8 text-6xl text-amber-400 md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                      Thunderbird!
                    </h2>
                    <p className="mb-7 text-lg font-medium text-white">
                      Courage and love for adventure! Those are the qualities
                      that Thunderbird has seen in you. As such, the mighty
                      Thunderbird stepped forward to claim you as a student of
                      their House. Be glad! For only those who are meant for
                      great things are sorted into this House at Ilvermorny. It
                      is time for you to showcase your bravery and forget your
                      shiness. That is what it means to be a student in the
                      House of Thunderbird!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* wampus */}

          <section
            id="wampus"
            className="py-36 bg-blueGray-50 overflow-hidden hidden"
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
                <div className="w-full md:w-1/2 p-8 lg:p-14">
                  <div className="relative w-96 h-96 mx-auto lg:ml-auto lg:mr-0  rounded-4xl">
                    {/* <Image className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/team/bg3.png" alt=""/> */}
                    <Link href="/houses/wampus">
                      <Image
                        className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000 cursor-pointer"
                        src="/wampus.webp"
                        alt="Wampus House logo"
                        width="400"
                        height="400"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 lg:p-14 bg-black">
                  <div className="w-3/4 h-full">
                    <h2 className="mb-8 text-6xl text-amber-400 md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                      Wampus!
                    </h2>
                    <p className="mb-7 text-lg font-medium text-white">
                      All students of Wampus House possess mighty strenght of
                      body and spirit. You, my dear, would clearly fit in just
                      right with them, for Wampus has stepped forward and
                      claimed you as a student of Wampus. Here, your true
                      potential will be uncovered, and even greater strenght
                      shall pour forth as a result. As the Wampus herself is
                      unbeatable in battle, so shall you become as well. Welcome
                      to the House of Strenght, the House of Wampus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
