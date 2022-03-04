import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 53px;
  width: 354px;
  height: 97px;
  color: white;

  background: linear-gradient(270deg, #4c12c8 -23.33%, #ff9a34 181.88%);
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25),
    8px 7px 11px rgba(162, 105, 121, 0.08);
  border: 4px solid #ffff;
  font-size: 36px;
  line-height: 54.97px;
  font-family: 'Secular One', sans-serif;

  position: relative;

  &::after {
    content: '';
    width: 0%;
    height: 4px;
    background: #fff;
    border-radius: 45px;

    transition: width 0.2s;

    position: absolute;
    bottom: 15px;
    left: 55px;
  }

  &:hover::after {
    width: 70%;
  }
`;
