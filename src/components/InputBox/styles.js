import styled, { css } from "styled-components/native";

import * as S from "@react-native-picker/picker";

export const Container = styled.View`
  gap: 4px;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GREEN500};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  `};
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY50};
  border-radius: 8px;
  padding: 6px 6px 6px 8px;
  width: 100%;
`;

export const SelectWrapper = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY600};
  border-radius: 8px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Select = styled(S.Picker)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SelectIos = styled(S.PickerIOS)``;

export const SelectItem = styled(S.Picker.Item)`
  align-self: center;
`;
