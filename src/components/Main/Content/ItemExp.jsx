import DateColumn from './ContentComponents/DateColumn';
import LineColumn from './ContentComponents/LineColumn';
import TitleExp from './ContentComponents/TitleExp';
import ListExp from './ContentComponents/ListExp';
import { ItemExpStyled, InfoColumn } from './ItemExp.styled';

const ItemExp = ({ item }) => {
  const { startDate, finishDate, technologies } = item;
  const isScreenTablet = window.matchMedia('(min-width: 768px)').matches;
  return (
    <ItemExpStyled>
      {isScreenTablet && (
        <DateColumn finishDate={finishDate} startDate={startDate} />
      )}
      {isScreenTablet && <LineColumn />}
      <InfoColumn>
        {!isScreenTablet && (
          <DateColumn finishDate={finishDate} startDate={startDate} />
        )}

        <TitleExp item={item} />
        {isScreenTablet && <ListExp technologies={technologies} />}
      </InfoColumn>
      {!isScreenTablet && <ListExp technologies={technologies} />}
    </ItemExpStyled>
  );
};

export default ItemExp;
