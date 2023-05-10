import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-200 to-red-200 flex-grow grid place-items-center p-20">
      <Image src="/cat.png" alt="Logo" width={100} height={24} priority />
      <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        <h3>Generate your pet name</h3>
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center p-5">
        Use ChatGPT to name your new pet! It{"'"}s fun and easy, just enter the
        characteristics of your pet and see the magic happens!
      </p>
      <form className="w-full max-w-sm">
        <div className="flex justify-center border-b border-gray-400 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="animal"
            placeholder="e.g. Orange cat"
          />
          <button
            className="flex-shrink-0 bg-rose-800 hover:bg-red-900 border-rose-800 hover:border-red-900 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Generate name
          </button>
        </div>
      </form>
    </main>
  );
}
