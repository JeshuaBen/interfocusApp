import * as S from "./styles";

const InputBox = ({ label, placeholder, fullWidth }) => {
  return (
    <S.Container
      style={{
        width: fullWidth ? "100%" : "48%",
      }}
    >
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
};

export default InputBox;
