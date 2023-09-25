import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREEN500};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Content = styled.View`
  margin-top: 20px;
  gap: 20px;
`;
