import { useCallback, useState, useLayoutEffect } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import Button from "../../components/Button";

import Header from "../../components/Header";

import ClientInfo from "./components/ClientInfo";
import { Entypo } from "@expo/vector-icons";
import DebtCard from "../../components/DebtCard";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { ActivityIndicator, Alert } from "react-native";

const ClientProfile = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientInfo, setClientInfo] = useState({});

  const theme = useTheme();
  const route = useRoute();
  const { id } = route.params;

  const getClientById = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/api/Divida/${id}`);
      setClientInfo(data);
      console.log(data);
    } catch (err) {
      Alert.alert(err[0].mensagem);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useLayoutEffect(() => {
    getClientById(id);
  }, []);

  const debtData = [
    {
      id: 1,
      title: "Divida 1",
      value: "R$ 230,00",
      status: "pending",
    },

    {
      id: 2,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "paid",
    },
    {
      id: 3,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "paid",
    },
    {
      id: 4,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "pending",
    },
    {
      id: 5,
      title: "Divida 2",
      value: "R$ 102,30",
      status: "pending",
    },
  ];

  return (
    <>
      {isLoading ? (
        <S.LoadingContainer>
          <ActivityIndicator size={30} color={theme.COLORS.GREEN500} />
        </S.LoadingContainer>
      ) : (
        <S.Container>
          <Header
            title="Clientes"
            buttonVariant
            onPress={() => navigation.goBack()}
          />
          <S.RoundedButton onPress={() => navigation.navigate("NewClient")}>
            <Entypo name="plus" size={40} color={theme.COLORS.WHITE} />
          </S.RoundedButton>

          <S.Content>
            <ClientInfo data={clientInfo.cliente} />
            <S.TextWrapper>
              <S.Title>Dívidas</S.Title>
              <Button
                onPress={() => navigation.navigate("DebtList")}
                text="Ver todas"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.COLORS.GREEN500,
                }}
                textStyle={{
                  color: theme.COLORS.GREEN500,
                }}
              />
            </S.TextWrapper>
          </S.Content>
          <S.DebtList
            data={debtData}
            renderItem={({ item }) => (
              <DebtCard
                title={item.title}
                valueOfDebt={item.value}
                status={item.status}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 8,
              gap: 16,
              paddingBottom: 16,
            }}
          />
        </S.Container>
      )}
    </>
  );
};

export default ClientProfile;
