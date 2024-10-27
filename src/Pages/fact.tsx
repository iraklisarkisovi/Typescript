import React from "react";
import { Link, useParams } from "react-router-dom";
import Wildcard from "./Wildcard";
import { FactsDiv } from "../Styles/style";

const facts: Record<number, string> = {
  1: "Kratos is the game character.",
  2: "Kratos is a god of war.",
  3: "Kratos is so powerful.",
};

interface Params {
  factId: string;
}

const Fact: React.FC = () => {
  const { factId } = useParams<Params>();
  const fact = facts[parseInt(factId, 10)];

  return (
    <FactsDiv>
      {fact ? (
        <p>Fact {factId}: {fact}</p>
      ) : (
        <Wildcard />
      )}
      <Link to='/' className="link1">Home</Link>
    </FactsDiv>
  );
};

export default Fact;
