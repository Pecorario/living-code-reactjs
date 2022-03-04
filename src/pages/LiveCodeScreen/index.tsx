import { Header, ButtonStarted } from '@components/index';
import backgroundImg from '@assets/background-image.png';

import * as S from './styles';

export default function LiveCodeScreen() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Image>
          <img
            src={backgroundImg}
            alt="Imagem de fundo com foguetes, planeta e cores"
          />
        </S.Image>
        <S.TextContent>
          <S.Title>Create, Manage &amp; Boost Your Business</S.Title>
          <S.Text>
            Pharetra blandit augue volutpat libero augue semper. Non diam neque
            praesent sem senectus mauris lectus a urna. Tortor pellentesque
            ipsum tincidunt enim.
          </S.Text>

          <ButtonStarted text="Get Started" />
        </S.TextContent>
      </S.Content>
    </S.Container>
  );
}
