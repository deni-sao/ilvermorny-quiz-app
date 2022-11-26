import Link from 'next/link';
import React from 'react';

// import Foo from './style';

const Footer: React.FC = () => {
  return (
    <section className="relative pt-24 bg-black overflow-hidden ">
      {/* <Image
        className="absolute left-1/2 bottom-0 h-full transform -translate-x-1/2"
        src="/gradient.svg"
        alt="klfldsj"
        width="900"
        height="900"
      /> */}
      <div className="relative z-10 container px-4 mx-auto">
        <div className="pb-24 border-b border-white">
          <div className="flex flex-wrap -m-8">
            <div className="w-full sm:w-1/2 lg:w-6/12 p-8">
              <div className="lg:max-w-sm">
                <Link
                  className="mb-8 inline-block text-white font-bold"
                  href="/"
                >
                  ILVERMORNY
                  {/* this will be the logo */}
                  {/* <Image src="flaro-assets/logos/flaro-logo-light.svg" alt="hhgfhgf"></Image> */}
                </Link>
                <p className="mb-20 text-gray-400 font-medium leading-relaxed md:max-w-xs">
                  Welcome to Ilvermorny School of Witchcraft and Wizardry. We
                  are beyond pleased to have you here.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                SITE
              </h3>
              <ul>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/">Home</Link>
                </li>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                HOUSES
              </h3>
              <ul>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/houses/hornedserpent">Horned Serpent</Link>
                </li>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/houses/wampus">Wampus</Link>
                </li>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/houses/thunderbird">Thunderbird</Link>
                </li>
                <li className="mb-5 text-white hover:text-gray-200 font-medium leading-relaxed">
                  <Link href="/houses/pukwudgie">Pukwudgie</Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                INTERACTIVE
              </h3>
              <ul>
                <li className="mb-5">
                  <Link
                    className="text-white hover:text-gray-200 font-medium leading-relaxed"
                    href="/quiz"
                  >
                    House Test
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="py-5 text-sm text-gray-300 font-medium text-center leading-normal">
          Copyright © 2022 ILVERMORNY. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
