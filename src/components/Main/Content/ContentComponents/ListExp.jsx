import { ListExpStyled, ItemExpStyled } from './ListExp.styled';

const ListExp = ({ technologies }) => {
  return (
    <ListExpStyled>
      {technologies.map((techlonogy, idx) => (
        <ItemExpStyled key={idx}>{techlonogy}</ItemExpStyled>
      ))}
    </ListExpStyled>
  );
};

export default ListExp;
