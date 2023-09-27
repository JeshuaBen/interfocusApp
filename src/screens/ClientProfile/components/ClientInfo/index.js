import * as S from "./styles";
import ClientInfoBox from "../../../../components/ClientInfoBox";
import { formatCpf } from "../../../../utils/formatCpf";
import { formatDate } from "../../../../utils/formatDate";

const ClientInfo = ({ data }) => {
  return (
    <S.Container>
      <ClientInfoBox title="Nome" value={data?.nome} />

      <S.Wrapper>
        <ClientInfoBox title="CPF" value={formatCpf(String(data?.cpf))} />
        <ClientInfoBox
          title="Nascimento"
          value={formatDate(String(data?.dataNascimento))}
        />
      </S.Wrapper>

      <ClientInfoBox title="Email" value={data?.email} />
    </S.Container>
  );
};

export default ClientInfo;
