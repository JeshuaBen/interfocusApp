import { Platform } from "react-native";
import { useTheme } from "styled-components";
import Button from "../Button";
import * as S from "./styles";
import { EvilIcons } from "@expo/vector-icons";

const DebtCard = ({
  title,
  onPress,
  valueOfDebt,
  variant = false,
  status = "pending",
}) => {
  const theme = useTheme();

  return (
    <S.Container
      style={{
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
          },
          android: {
            elevation: 5,
          },
        }),
      }}
    >
      <S.Wrapper>
        <S.Title
          style={{
            color: theme.COLORS.GREEN100,
          }}
        >
          {title}
        </S.Title>
        {status === "pending" ? (
          <Button
            text="Pagar"
            style={{
              backgroundColor: theme.COLORS.RED500,
            }}
            onPress={onPress}
            textStyle={{
              color: theme.COLORS.WHITE,
            }}
          />
        ) : (
          <EvilIcons name="check" size={24} color={theme.COLORS.GREEN100} />
        )}
      </S.Wrapper>

      {variant && <S.Separator />}

      <S.Wrapper>
        <S.Title
          style={{
            color: variant ? theme.COLORS.GREEN100 : theme.COLORS.GRAY800,
          }}
        >
          Valor da dívida:
        </S.Title>

        <S.Title
          style={{
            color: theme.COLORS.GRAY500,
          }}
        >
          {valueOfDebt}
        </S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default DebtCard;
