import React, { useState } from 'react';

import logoImg from '../../assets/images/star-wars.svg';
import gifReady from '../../assets/gifs/gif1.gif';
import gifGo from '../../assets/gifs/gif2.gif';
import { Container, Content, Loading } from './styled';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<any>([]);
  const [homeworld, setHomeworld] = useState<any>({});

  const randomPeople = async (peopleID: number) => {
    setLoading(true);

    try {
      await fetch(`https://www.swapi.tech/api/people/${peopleID}`)
        .then(res => res.json())
        .then(data => {
          setPeople(data.result);
          fetch(data.result.properties?.homeworld)
            .then(res => res.json())
            .then(home => setHomeworld(home.result));
        })
        .catch(err => new Error(err));

      setLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleClick = async () => {
    const wait = (m: number) => new Promise(r => setTimeout(r, m));
    setLoading(true);
    await wait(10000);

    try {
      const min = Math.ceil(1);
      const max = Math.floor(80);
      randomPeople(Math.floor(Math.random() * (max - min)) + min);
    } catch (e) {
      throw new Error(e);
    }
  };

  const showSteps = () => {
    if (loading) {
      return (
        <>
          <img
            src={gifGo}
            alt="gif let's go"
            style={{ width: '100px', height: '100px' }}
          />
          <Loading>Loading...</Loading>
        </>
      );
    }

    if (!loading && people.properties?.name && homeworld.properties?.name) {
      return (
        <Content>
          <header>
            Your character name is
            <h2>{people.properties.name}</h2>
            <h3>Homeworld: {homeworld.properties?.name}</h3>
          </header>
          <div>
            <span>Birth Year: {people.properties.birth_year}</span>
            <span>Gender: {people.properties.gender}</span>
            <span>Eye Color: {people.properties.eye_color}</span>
            <span>Skin Color: {people.properties.skin_color}</span>
            <span>Hair Color: {people.properties.hair_color}</span>
            <span>
              Height: {(people.properties.height / 100).toPrecision(3)}{' '}
              <strong>meters</strong>
            </span>
          </div>
        </Content>
      );
    }

    return (
      <>
        <img src={gifReady} alt="gif " />
        <button type="button" onClick={() => handleClick()}>
          discover now
        </button>
      </>
    );
  };
  return (
    <>
      <Container>
        <h1>Start</h1>
        <div>
          <img src={logoImg} alt="main logo" />
          <p>Find out who you would be in the universe of Star Wars</p>
        </div>
        {showSteps()}
      </Container>
    </>
  );
};

export default Home;
