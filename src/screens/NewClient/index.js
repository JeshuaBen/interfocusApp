import { useState } from "react";

import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import * as S from "./styles";
import { Entypo } from "@expo/vector-icons";

const NewClient = ({ navigation }) => {
  const [debts, setDebts] = useState([]);

  const theme = useTheme();

  return (
    <S.Container>
      <Header
        buttonVariant
        title="Clientes"
        onPress={() => navigation.goBack()}
      />

      <S.RoundedButton onPress={() => navigation.navigate("NewDebt")}>
        <Entypo name="plus" size={30} color={theme.COLORS.WHITE} />
      </S.RoundedButton>

      <S.Content>
        <InputBox label="Nome" placeholder="Digite seu nome" fullWidth />

        <S.Wrapper>
          <InputBox label="CPF" placeholder="Digite seu CPF" />
          <InputBox label="Nascimento" placeholder="Data de Nascimento" />
        </S.Wrapper>

        <InputBox label="Email" placeholder="Digite seu Email" fullWidth />

        <S.Title>Dívidas</S.Title>

        <S.DebtContainer
          data={debts}
          renderItem={
            <S.EmptyContainer>
              <S.Text>Testando</S.Text>
            </S.EmptyContainer>
          }
          ListEmptyComponent={
            <S.EmptyContainer>
              <S.Text
                style={{
                  alignSelf: "center",
                }}
              >
                Testando
              </S.Text>
            </S.EmptyContainer>
          }
          style={{ height: "42%" }}
          contentContainerStyle={{
            backgroundColor: "red",
          }}
        />

        <S.ButtonWrapper>
          <Button
            text="Cancelar"
            style={{
              borderWidth: 1,
              borderColor: theme.COLORS.GREEN500,
            }}
            textStyle={{
              color: theme.COLORS.GREEN500,
            }}
          />
          <Button
            text="Salvar"
            style={{
              backgroundColor:
                debts.length === 0
                  ? theme.COLORS.GRAY50
                  : theme.COLORS.GREEN500,
            }}
            disabled={debts.length === 0}
            textStyle={{
              color: theme.COLORS.WHITE,
            }}
          />
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  );
};

export default NewClient;
