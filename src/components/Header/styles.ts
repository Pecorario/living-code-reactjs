import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 48px 7.08% 0 7.08%;

  & nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`;

export const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
    font-size: 24px;
    line-height: 36.65px;
    font-weight: 500;
    color: #515050;

    position: relative;
  }

  & li::after {
    content: '';
    width: 0%;
    height: 4px;
    background: linear-gradient(270deg, #6726b3 1.37%, #b56272 97.26%);
    border-radius: 45px;

    transition: width 0.2s;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  & li:hover::after {
    width: 100%;
  }

  & li:hover {
    background: -webkit-linear-gradient(270deg, #6726b3 1.37%, #b56272 97.26%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: end;
  & button + button {
    margin-left: 41px;
  }
`;
