import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function House() {
  const { data: session, status } = useSession();
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28 bg-white"
      // style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                  Rich text
                </span> */}
                <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                  The Patron: Horned Serpent
                </h3>
                <p className="text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">
                  Horned Serpent is the patron of the Horned Serpent House. At
                  the time of the sorting ceremony, he will step forward and
                  choose the students he sees as fitting to be in his house.
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap lg:justify-center items-center -mb-2">
                  {status === 'authenticated' ? (
                    <Link
                      className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-black font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="/quiz"
                    >
                      Sorting Ceremony
                    </Link>
                  ) : (
                    <Link
                      className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-black font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="/signinrequired"
                    >
                      Sorting Ceremony
                    </Link>
                  )}
                  <Link
                    className="inline-block py-3 px-6 mb-2 w-full md:w-auto text-lg leading-7 font-medium text-center text-coolGray-500 bg-coolGray-50 hover:bg-coolGray-100 rounded-md"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <p className="mb-6 text-lg font-medium leading-7 text-coolGray-500">
              Here are the big takeaways from the creature itself: It resembles
              a snake and, much like Harry Potter with the python at the zoo or
              the basilisk at the school, our newest hero, Isolt Sayre, can
              speak to it, meaning that Parselmouths definitely exist in
              America, too. It is why she felt a kinship with the snake, and the
              reason it was chosen as the head of the house. The serpent has a
              jewel in the middle of its forehead, and the gem was what drew
              Sayre to the snake in the first place.
            </p>
            <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-coolGray-800">
              Horned Serpent House
            </h3>

            <p className="text-lg font-medium leading-7 text-coolGray-500">
              Students sorted into Horned Serpent are highly intelligent and
              scholarly, but also resourceful and look out for one another. It
              is very close to how the students of Hogwarts operated, but
              without that whole "I have got to look like I am the best in front
              of Lord Voldemort" pressure.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="mx-auto"
              src="/horned-serpent.webp"
              alt="Horned Serpent House logo"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
