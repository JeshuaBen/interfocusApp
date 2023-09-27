import { useState, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import api from "../../services/api";
import * as S from "./styles";
import ClientsCard from "../../components/ClientsCard";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Header from "../../components/Header";
import { formatCpf } from "../../utils/formatCpf";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";

const Clients = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientsAndDebts, setClientsAndDebts] = useState([]);
  const [filterClient, setFilterClient] = useState("");
  const [filteredClients, setFilteredClients] = useState(clientsAndDebts);

  const theme = useTheme();

  const handleFilterClients = (text) => {
    setFilterClient(text);

    const filtered = clientsAndDebts.filter((client) =>
      client.cliente.nome?.toLowerCase().includes(text?.toLowerCase())
    );
    setFilteredClients(filtered);
    ("");
  };

  const handleNavigateClientProfile = (id) => {
    navigation.navigate("ClientProfile", { id });
  };

  const getAllClients = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/api/Divida/GetOData");

      const clientMap = new Map();

      data.d.results.forEach((entry) => {
        const cpf = entry.cliente.cpf;
        const valor = entry.valor;

        if (clientMap.has(cpf)) {
          const existingClient = clientMap.get(cpf);
          existingClient.valor += valor;
        } else {
          clientMap.set(cpf, {
            ...entry.cliente,
            valor,
          });
        }
      });

      const uniqueClients = Array.from(clientMap.values());

      setClientsAndDebts(uniqueClients);
    } catch (err) {
      Alert.alert(err[0].mensagem);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  console.log(filteredClients);

  return (
    <S.Container>
      <Header title="Clientes" />

      <S.FilterBox>
        <S.Input
          placeholder="Digite o nome do cliente"
          value={filterClient}
          onChangeText={(text) => handleFilterClients(text)}
        />
        <EvilIcons name="search" size={24} color={theme.COLORS.GRAY100} />
      </S.FilterBox>

      <S.RoundedButton onPress={() => navigation.navigate("NewClient")}>
        <Entypo name="plus" size={30} color={theme.COLORS.WHITE} />
      </S.RoundedButton>

      {isLoading ? (
        <S.LoadingContainer>
          <ActivityIndicator size={30} color={theme.COLORS.GREEN500} />
        </S.LoadingContainer>
      ) : (
        <S.Content
          data={filteredClients.length > 0 ? filteredClients : clientsAndDebts}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <ClientsCard
              title={item.nome}
              document={formatCpf(item.cpf)}
              email={item.email}
              amount={formatCurrencyBRL(item.valor)}
              onPress={() => handleNavigateClientProfile(item.id)}
            />
          )}
        />
      )}
    </S.Container>
  );
};

export default Clients;
