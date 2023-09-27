import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { FlatList, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px 16px 0px 16px;
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

export const FilterBox = styled.View`
  width: 100%;
  padding: 4px 6px 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY100};
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 16px;
  position: relative;
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
