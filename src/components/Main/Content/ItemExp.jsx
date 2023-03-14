import DateColumn from './ContentComponents/DateColumn';
// import LineColumn from './ContentComponents/LineColumn';
import TitleExp from './ContentComponents/TitleExp';
import ListExp from './ContentComponents/ListExp';
import { ItemExpStyled, InfoColumn } from './ItemExp.styled';

const ItemExp = ({ item }) => {
  const { startDate, finishDate, technologies } = item;
  return (
    <ItemExpStyled>
      {/* <DateColumn finishDate={finishDate} startDate={startDate} /> */}
      <InfoColumn>
        <DateColumn finishDate={finishDate} startDate={startDate} />
        <TitleExp item={item} />
      </InfoColumn>
      <ListExp technologies={technologies} />
    </ItemExpStyled>
  );
};

export default ItemExp;
