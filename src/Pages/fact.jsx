import { Link, useParams } from "react-router-dom"
import Wildcard from "./Wildcard";
import { FactsDiv } from "../Styles/style";

const facts = {
    1: "Kratos is the game character.",
    2: "Kratos is a god of war.",
    3: "Kratos is so poverful.",
  };
  
  const Fact = () => {
    const { factId } = useParams();
    const fact = facts[factId];
  
    return (
      <FactsDiv>
        {fact ? (
          <p>Fact {factId}: {fact}</p>
        ) : (
          <Wildcard/>
        )}
        <Link to='/' className="link1">Home</Link>
      </FactsDiv>
    );
  }
  

export default Fact