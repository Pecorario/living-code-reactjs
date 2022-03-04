import styled, { css } from 'styled-components';

interface ButtonProps {
  color: 'primary' | 'secondary';
}

export const Container = styled.button<ButtonProps>`
  width: 130px;
  height: 52px;
  border-radius: 10px;

  font-size: 24px;
  line-height: 36.65px;
  font-weight: 400;

  transition: linear 0.2s;

  ${props =>
    props.color === 'primary'
      ? css`
          color: #fff;
          background: #1f1f1f;

          &:hover {
            border: 2px solid #1f1f1f;
            color: #1f1f1f;
          }
        `
      : css`
          color: #c4c4c4;
          background: transparent;
          border: 2px solid #c4c4c4;

          &:hover {
            border: 2px solid #1f1f1f;
            color: #1f1f1f;
          }
        `}
`;
