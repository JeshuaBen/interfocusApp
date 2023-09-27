import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 50%;
  gap: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GREEN500};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  `};
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY800};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
