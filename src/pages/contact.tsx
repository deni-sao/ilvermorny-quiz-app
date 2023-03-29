import Link from 'next/link';

export default function Contact() {
  return (
    <section className="pt-24 pb-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center mb-14">
          <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white">
            Owl post is great! However ...
          </h2>
          <p className="text-gray-400 text-lg">
            If you happen to be one of the students that do not have an owl at
            their disposal, feel free to send us a digital message by filling
            out the form provided below.
          </p>
        </div>
        <div className="flex flex-wrap max-w-xl mx-auto -m-2.5">
          <div className="w-full p-2.5">
            <input
              className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
              placeholder="Your full name"
            />
          </div>
          <div className="w-full p-2.5">
            <input
              className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
              placeholder="Your email address"
            />
          </div>
          <div className="w-full p-2.5">
            <textarea
              className="w-full h-40 px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 resize-none rounded"
              placeholder="Write message"
            />
          </div>
          <div className="w-full p-2.5">
            <div className="group relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300" />
              <button className="p-1 w-full font-heading font-semibold text-xs text-yellow-900 uppercase tracking-px overflow-hidden rounded-md">
                <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                  <p className="relative z-10">Send message</p>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full p-2.5">
            <p className="text-sm text-gray-500 text-center">
              <span>By clicking the send button, you agree with our</span>
              <Link
                className="pb-1 hover:text-gray-400 border-b border-gray-500"
                href="/"
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
