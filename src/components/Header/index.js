import * as S from "./styles";

const Header = ({ buttonVariant, title, onPress }) => {
  return (
    <S.Container>
      {buttonVariant && (
        <S.GoBackButton onPress={onPress}>
          <S.ArrowLeft />
        </S.GoBackButton>
      )}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
