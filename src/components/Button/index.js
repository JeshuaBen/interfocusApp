import * as S from "./styles";

const Button = ({ style, text, textStyle, disabled, onPress }) => {
  return (
    <S.Container style={style} disabled={disabled} onPress={onPress}>
      <S.Text style={textStyle}>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
