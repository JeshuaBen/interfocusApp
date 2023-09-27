import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px 16px 0px 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.FlatList`
  margin-top: 16px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY50};
  margin-bottom: 16px;
  padding: 8px 0px;
`;

export const TextContent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY800};
  `};
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;
