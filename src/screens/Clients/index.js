import * as S from "./styles";
import ClientsCard from "../../components/ClientsCard";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Header from "../../components/Header";

const Clients = ({ navigation }) => {
  const theme = useTheme();

  const handleNavigateClientProfile = (id) => {
    navigation.navigate("ClientProfile", { id });
  };

  return (
    <S.Container>
      <Header title="Clientes" />

      <S.FilterBox>
        <S.Input placeholder="Digite o nome do cliente" />
        <EvilIcons name="search" size={24} color={theme.COLORS.GRAY100} />
      </S.FilterBox>

      <S.RoundedButton onPress={() => navigation.navigate("NewClient")}>
        <Entypo name="plus" size={30} color={theme.COLORS.WHITE} />
      </S.RoundedButton>

      <S.Content>
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000.000.000-00"
          email="email@email.com"
          amount="R$ 990,90"
          onPress={() => handleNavigateClientProfile(1)}
        />
        <ClientsCard
          title="Sandra Elisa Farias de Jesus"
          document="668.622.304-25"
          email="email@email.com"
          amount="R$ 990,90"
          onPress={() => handleNavigateClientProfile(2)}
        />
      </S.Content>
    </S.Container>
  );
};

export default Clients;
