import React from "react";

interface PetFormProps {
  pet: string;
  handlePetChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const PetForm: React.FC<PetFormProps> = ({
  pet,
  handlePetChange,
  handleSubmit,
}) => (
  <form className="w-full max-w-sm" onSubmit={handleSubmit}>
    <div className="flex justify-center border-b border-gray-400 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        name="animal"
        value={pet}
        onChange={handlePetChange}
        placeholder="e.g. Orange cat"
        required
      />
      <button
        className="flex-shrink-0 bg-rose-800 hover:bg-red-900 border-rose-800 hover:border-red-900 text-sm border-4 text-white py-1 px-2 rounded"
        type="submit"
      >
        Generate name
      </button>
    </div>
  </form>
);

export default PetForm;
