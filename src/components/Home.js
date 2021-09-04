import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import DATA from "../data/productData";
import Card from "./Card";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <>
      <NavigationBar/>
      <Container>
        <Slider></Slider>
      </Container>

      {/* Cards */}

      <ContainerGrid>
        <div className='grid justify-content-center'>
          {DATA[0].items.map((item) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                description={item.description}
                category={DATA[0].routeName} 
              />
            );
          })}
        </div>
      </ContainerGrid>
    </>
  );
};

export default Home;
const Container = styled.div``;
const ContainerGrid = styled.div`
  padding: 3em;
`;