import { useState, useCallback } from "react";

import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import * as S from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { validateCpf } from "../../utils/validateCpf";
import api from "../../services/api";
import { Alert } from "react-native";

const createClientSchema = z.object({
  nome: z.string().min(3, "Nome deve conter pelo menos 3 caracteres"),
  cpf: z.string().refine((value) => validateCpf(value), {
    message: "CPF inválido",
  }),
  nascimento: z.date().min(new Date(1900, 0, 1), "Data de nascimento inválida"),
  email: z.string().email("Email inválido"),
});

const NewClient = ({ navigation }) => {
  const [debts, setDebts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, errors } = useForm();

  const theme = useTheme();

  const createClient = useCallback(async (data) => {
    setIsLoading(true);

    try {
      const response = await api.post("/api/Cliente", data);
      console.log(response);
    } catch (error) {
      Alert.alert(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
        <Controller
          control={control}
          name="nome"
          defaultValue=""
          render={({ field }) => (
            <InputBox
              label="Nome"
              placeholder="Digite seu nome"
              fullWidth
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors && <S.ErrorText>{errors}</S.ErrorText>}

        <S.Wrapper>
          <Controller
            control={control}
            name="cpf"
            defaultValue=""
            render={({ field }) => (
              <InputBox
                label="CPF"
                placeholder="Digite seu CPF"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />

          <Controller
            control={control}
            name="nascimento"
            defaultValue=""
            render={({ field }) => (
              <InputBox
                label="Nascimento"
                placeholder="Data de Nascimento"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </S.Wrapper>

        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <InputBox
              label="Email"
              placeholder="Digite seu Email"
              fullWidth
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />

        <S.Title>Dívidas</S.Title>

        <S.DebtContainer
          data={debts}
          renderItem={<S.EmptyContainer></S.EmptyContainer>}
          ListEmptyComponent={
            <S.EmptyContainer>
              <S.Text
                style={{
                  alignSelf: "center",
                }}
              >
                Não possui dívidas
              </S.Text>
            </S.EmptyContainer>
          }
          style={{ height: "42%" }}
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
              backgroundColor: theme.COLORS.GREEN500,
            }}
            disabled={false}
            textStyle={{
              color: theme.COLORS.WHITE,
            }}
            onPress={handleSubmit(createClient)}
          />
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  );
};

export default NewClient;
