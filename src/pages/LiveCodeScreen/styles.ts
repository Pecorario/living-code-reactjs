import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  height: 100%;
  width: 100%;
`;

export const Image = styled.div`
  height: 100%;
  /* background: pink; */

  & img {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 91%;
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  height: calc(100vh - 100px);
  padding: 0 7.08%;
`;

export const TextContent = styled.div`
  height: fit-content;
  margin: auto 0;
`;

export const Title = styled.h1`
  font-family: 'Secular One', sans-serif;
  font-size: 88px;
  line-height: 95.89px;
  color: #1f1f1f;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 33.59px;
  color: #515050;
  margin-top: 30px;
  margin-bottom: 55px;
`;
