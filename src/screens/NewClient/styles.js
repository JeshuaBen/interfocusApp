import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GREEN500};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-top: 4px;
  `};
`;

export const DebtContainer = styled.FlatList``;

export const EmptyContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const RoundedButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.GREEN500};
  border-radius: 999px;
  position: absolute;
  bottom: 70px;
  right: 16px;
  align-items: center;
  justify-content: center;
  z-index: 400;
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.RED500};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    margin-top: 2px;
  `};
`;
