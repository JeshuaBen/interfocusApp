import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px 16px 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 16px;
`;

export const Content = styled.View`
  width: 100%;
  gap: 10px;
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
  gap: 6px;
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

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY50};
`;

export const ValueWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY800};
  `};
`;
