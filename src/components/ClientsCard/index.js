import * as S from "./styles";
import { Platform } from "react-native";

const ClientsCard = ({ title, document, email, amount, onPress }) => {
  return (
    <S.Container
      onPress={onPress}
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
            elevation: 9,
          },
        }),
      }}
    >
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Wrapper>
          <S.StrongText>CPF:</S.StrongText>
          <S.Text>{document}</S.Text>
        </S.Wrapper>
        <S.Wrapper>
          <S.StrongText>E-mail:</S.StrongText>
          <S.Text>{email}</S.Text>
        </S.Wrapper>

        <S.Separator />
      </S.Content>

      <S.ValueWrapper>
        <S.Title>Valor da dívida:</S.Title>
        <S.Amount>{amount}</S.Amount>
      </S.ValueWrapper>
    </S.Container>
  );
};

export default ClientsCard;
