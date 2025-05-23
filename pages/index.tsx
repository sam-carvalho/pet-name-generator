import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import PetForm from "../components/PetForm";
import GeneratedPetResults from "../components/GeneratedPetResults";
import handleFetch from "../components/utils/handleFetch";

export default function Home() {
  const [pet, setPet] = useState("");
  const [petResult, setPetResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPet(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setPetResult("");
    setError("");

    const result = await handleFetch(pet);

    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setPetResult(result.data);
    }

    setLoading(false);
    setPet("");
  };

  return (
    <div>
      <Head>
        <title>Pet Name Generator</title>
        <meta
          name="description"
          content="App to generate pet names using ChatGPT"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-gradient-to-r from-indigo-200 to-red-200 flex-grow grid p-20 min-h-screen">
        <div className="flex flex-col items-center max-w-2xl px-4 py-16 mx-auto">
          <Image src="/cat.png" alt="Logo" width={100} height={24} priority />
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            <h3>Generate your pet name</h3>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center p-5">
            Use ChatGPT to name your new pet! It{"'"}s fun and easy just enter
            the
            <br /> characteristics of your pet and see the magic happens!
          </p>
          <PetForm
            pet={pet}
            handlePetChange={handlePetChange}
            handleSubmit={handleSubmit}
          />
          {loading && (
            <p className="mt-4 text-gray-500 font-semibold">
              Generating name...
            </p>
          )}

          {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
          {petResult && <GeneratedPetResults petResult={petResult} />}
        </div>
      </main>
    </div>
  );
}
