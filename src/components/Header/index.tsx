import { Button } from '@components/index';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <nav>
        <div></div>
        <S.NavBar>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </S.NavBar>
        <S.ContainerButtons>
          <Button text="Sign up" color="primary" />
          <Button text="Log in" color="secondary" />
        </S.ContainerButtons>
      </nav>
    </S.Container>
  );
}
