import { useTheme } from "styled-components";
import * as S from "./styles";
import { Platform } from "react-native";

const InputBox = ({ label, placeholder, fullWidth, select = false }) => {
  const theme = useTheme();

  return (
    <S.Container
      style={{
        width: fullWidth ? "100%" : "48%",
      }}
    >
      <S.Label>{label}</S.Label>
      {select ? (
        <S.SelectWrapper>
          {Platform.OS === "ios" ? (
            <S.SelectIos />
          ) : (
            <S.Select placeholder={placeholder}>
              <S.SelectItem
                label="Pago"
                value="pago"
                fontFamily={theme.FONT_FAMILY.REGULAR}
              />
              <S.SelectItem
                label="Pendente"
                value="pendente"
                fontFamily={theme.FONT_FAMILY.REGULAR}
              />
            </S.Select>
          )}
        </S.SelectWrapper>
      ) : (
        <S.Input placeholder={placeholder} />
      )}
    </S.Container>
  );
};

export default InputBox;
