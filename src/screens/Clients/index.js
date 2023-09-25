import * as S from "./styles";
import ClientsCard from "../../components/ClientsCard";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const Clients = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Title>Clientes</S.Title>

      <S.FilterBox>
        <S.Input placeholder="Digite o nome do cliente" />
        <EvilIcons name="search" size={24} color={theme.COLORS.GRAY100} />
      </S.FilterBox>

      <S.RoundedButton>
        <AntDesign name="plus" size={24} color={theme.COLORS.WHITE} />
      </S.RoundedButton>

      <S.Content>
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
        <ClientsCard
          title="Maria Helena de Rodrigues"
          document="000000000"
          email="email@email.com"
          amount="R$ 990,90"
        />
      </S.Content>
    </S.Container>
  );
};

export default Clients;
