import * as S from "./styles";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { useTheme } from "styled-components";

const NewDebt = ({ navigation }) => {
  const theme = useTheme();

  return (
    <S.Container>
      <Header
        buttonVariant
        title="Nova dívida"
        onPress={() => navigation.goBack()}
      />

      <S.Content>
        <InputBox
          label="Nome"
          placeholder="Digite o nome da sua dívida"
          fullWidth
        />

        <S.Wrapper>
          <InputBox label="Data de criação" placeholder="DD/MM/AA" />
          <InputBox label="Valor" placeholder="Data de Nascimento" />
        </S.Wrapper>

        <InputBox label="Situação" placeholder="DD/MM/AA" select fullWidth />

        <InputBox label="Data do pagamento" placeholder="DD/MM/AA" />
      </S.Content>

      <S.ButtonWrapper>
        <Button
          text="Cancelar"
          onPress={() => navigation.goBack()}
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
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default NewDebt;
