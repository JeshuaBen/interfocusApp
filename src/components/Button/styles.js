import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 8px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
