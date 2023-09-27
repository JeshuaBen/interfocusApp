import * as S from "./styles";

const ClientInfoBox = ({ title, value }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Info>{value}</S.Info>
    </S.Container>
  );
};

export default ClientInfoBox;
