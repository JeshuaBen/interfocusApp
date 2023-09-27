import * as S from "./styles";
import Header from "../../components/Header";
import DebtCard from "../../components/DebtCard";
import Button from "../../components/Button";
import { useTheme } from "styled-components";

const DebtList = ({ navigation }) => {
  const theme = useTheme();

  const debtData = [
    {
      id: 1,
      title: "Divida 1",
      value: "R$ 230,00",
      status: "pending",
    },

    {
      id: 2,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "paid",
    },
    {
      id: 3,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "paid",
    },
    {
      id: 4,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "pending",
    },
    {
      id: 5,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "pending",
    },
  ];

  return (
    <S.Container>
      <Header
        title="Listagem de dívidas"
        buttonVariant
        onPress={() => navigation.goBack()}
      />

      <S.Content
        data={debtData}
        renderItem={({ item }) => (
          <DebtCard
            title={item.title}
            valueOfDebt={item.value}
            status={item.status}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          gap: 16,
          paddingBottom: 16,
        }}
      />

      <S.Wrapper>
        <S.TextContent
          style={{
            fontFamily: theme.FONT_FAMILY.BOLD,
          }}
        >
          Total
        </S.TextContent>
        <S.TextContent
          style={{
            fontFamily: theme.FONT_FAMILY.REGULAR,
          }}
        >
          R$ 230, 90
        </S.TextContent>
      </S.Wrapper>

      <S.ButtonContainer>
        <Button
          text="Pagar"
          style={{
            backgroundColor: theme.COLORS.GREEN500,
          }}
          textStyle={{
            color: theme.COLORS.WHITE,
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default DebtList;
