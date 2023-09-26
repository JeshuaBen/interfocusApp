import * as S from "./styles";

import DebtCard from "../../components/DebtCard";
import Header from "../../components/Header";

const Home = () => {
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

  return (
    <>
      <S.Container>
        <Header title="Resumo de dívidas" />

        <S.Content>
          {temporaryCardInfos.map((value, index) => (
            <DebtCard
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
