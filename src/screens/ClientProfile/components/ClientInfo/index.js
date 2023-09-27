import * as S from "./styles";
import ClientInfoBox from "../../../../components/ClientInfoBox";

const ClientInfo = ({ data }) => {
  return (
    <S.Container>
      <ClientInfoBox title="Nome" value="Sandra Elisa Farias de Jesus" />

      <S.Wrapper>
        <ClientInfoBox title="CPF" value="668.622.304-25" />
        <ClientInfoBox title="Nascimento" value="22/12/1997" />
      </S.Wrapper>

      <ClientInfoBox title="Email" value="sandra.elisa@yahoo.com.br" />
    </S.Container>
  );
};

export default ClientInfo;
