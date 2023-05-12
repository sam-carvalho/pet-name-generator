import React from "react";

interface GeneratedPetResultsProps {
  petResult: string;
}

const GeneratedPetResults: React.FC<GeneratedPetResultsProps> = ({
  petResult,
}) => <div>{petResult}</div>;

export default GeneratedPetResults;
