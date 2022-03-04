import * as S from './styles';

interface ButtonProps {
  text: string;
  color: 'primary' | 'secondary';
}

export default function Button({ text, color, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} color={color}>
      {text}
    </S.Container>
  );
}
