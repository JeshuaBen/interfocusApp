import styled, { css } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GREEN500};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ArrowLeft = styled(Entypo).attrs(({ theme }) => ({
  name: "chevron-left",
  size: 20,
  color: theme.COLORS.GREEN500,
}))``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREEN500};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
