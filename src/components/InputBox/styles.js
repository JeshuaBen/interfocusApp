import styled, { css } from "styled-components/native";

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
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY100};
  border-radius: 8px;
  padding: 6px 6px 6px 8px;
  width: 100%;
`;
