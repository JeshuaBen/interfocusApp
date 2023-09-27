import * as S from "./styles";

import AllDebts from "../../components/AllDebts";
import Header from "../../components/Header";
import { useTheme } from "styled-components";

const Home = () => {
  const theme = useTheme();

  const temporaryCardInfos = [
    {
      title: "Dívidas em aberto",
      quantity: 32,
      amount: "R$ 43.243,09",
    },
    {
      title: "Dívidas pagas",
      quantity: 123,
      amount: "R$ 43.243,09",
    },
    {
      title: "Dívidas cadastradas",
      quantity: 4565,
      amount: "R$ 23.433.243,09",
    },
  ];

  const getAllDebts = () => {
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <>
      <S.Container>
        <Header title="Resumo de dívidas" />

        <S.Content>
          {temporaryCardInfos.map((value, index) => (
            <AllDebts
              key={index}
              title={value.title}
              quantity={value.quantity}
              amount={value.amount}
            />
          ))}
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
