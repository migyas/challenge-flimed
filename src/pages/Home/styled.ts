import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  padding-bottom: 12rem;

  h1 {
    display: none;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    font-style: italic;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;

    img {
      width: 20rem;
      height: 20rem;
    }
  }

  button {
    border: 1px solid #bdbdbd;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1.5rem;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 10rem;
    height: 10rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 5rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    h2 {
      font-size: 4rem;
    }
  }

  div {
    margin-top: 3rem;
    span {
      border: 1px solid #222;
      border-radius: 5px;
      font-size: 1.5rem;
      padding: 0.5rem;
      text-transform: capitalize;
      margin-bottom: 1rem;

      strong {
        text-transform: lowercase;
        font-weight: normal;
      }
    }
  }
`;
const Loading = styled.div`
  font-size: 2rem;
`;

export { Container, Content, Loading };
