import React from "react";

interface GeneratedPetResultsProps {
  petResult: string;
}

const GeneratedPetResults: React.FC<GeneratedPetResultsProps> = ({
  petResult,
}) => {
  const resultsArray = petResult
    .split("\n")
    .filter((item) => item.trim() !== "");

  return (
    <div className="pt-6">
      <ul>
        {resultsArray.map((item, index) => (
          <li className="pt-1" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneratedPetResults;
