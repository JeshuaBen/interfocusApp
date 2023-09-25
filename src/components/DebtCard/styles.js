import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  gap: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GREEN100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StrongText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY800};
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY800};
  `};
`;
