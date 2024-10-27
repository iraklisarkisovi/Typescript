import React from "react";
import { Link } from "react-router-dom";
import { Image, Container, Facts, MainContainer } from "../Styles/style";

const Mainpage: React.FC = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <h1>Kratos</h1>
          <Image
            src="https://wallpapers.com/images/hd/god-of-war-kratos-in-rage-o87hec83va9ectwb.jpg"
            alt="Kratos"
          />
          <Facts>
            <Link to='/1' className="link">Fact 1</Link>
            <Link to='/2' className="link">Fact 2</Link>
            <Link to='/3' className="link">Fact 3</Link>
            <Link to='/About' className="link">About</Link>
          </Facts>
        </Container>
      </MainContainer>
    </>
  );
};

export default Mainpage;
