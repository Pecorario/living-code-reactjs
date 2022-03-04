import * as S from './styles';

interface ButtonStartedProps {
  text: string;
}

export default function ButtonStarted({ text }: ButtonStartedProps) {
  return <S.Container>{text}</S.Container>;
}
