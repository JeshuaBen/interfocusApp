import * as S from "./styles";

const Button = ({ style, text, textStyle, disabled }) => {
  return (
    <S.Container style={style} disabled={disabled}>
      <S.Text style={textStyle}>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
