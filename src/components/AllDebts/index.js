import { Platform } from "react-native";
import * as S from "./styles";

const AllDebts = ({ title, quantity, amount }) => {
  return (
    <S.Container
      style={{
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
          },
          android: {
            elevation: 5,
          },
        }),
      }}
    >
      <S.Title>{title}</S.Title>

      <S.Wrapper>
        <S.StrongText>Qtde:</S.StrongText>
        <S.Text>{quantity}</S.Text>
      </S.Wrapper>

      <S.Wrapper>
        <S.StrongText>Valor total:</S.StrongText>
        <S.Text>{amount}</S.Text>
      </S.Wrapper>
    </S.Container>
  );
};

export default AllDebts;
