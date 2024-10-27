import React from "react";
import { Link } from "react-router-dom";
import { FactsDiv } from "../Styles/style";

const About: React.FC = () => {
  return (
    <FactsDiv>
      <h1>About Information</h1>
      <br />
      <p>
        Throughout the Greek era of the series, Kratos is portrayed as a Spartan warrior who becomes known as the "Ghost of Sparta" after being deceived by his former mentor Ares into murdering his family. He later avenges their deaths and becomes the new "God of War" after killing Ares. Kratos is eventually revealed to be a demigod and the son of Zeus, who later betrays him. He embarks on several adventures in attempts to avert disaster or to change his fate, and is generally portrayed as a tragic figure.
      </p>
      <Link to='/' className="link1">Home</Link>
    </FactsDiv>
  );
}

export default About;
