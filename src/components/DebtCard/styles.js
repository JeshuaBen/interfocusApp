import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY50};
`;
