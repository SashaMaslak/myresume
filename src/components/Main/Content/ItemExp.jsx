import DateColumn from './ContentComponents/DateColumn';
import LineColumn from './ContentComponents/LineColumn';
import TitleExp from './ContentComponents/TitleExp';
import ListExp from './ContentComponents/ListExp';
import { ItemExpStyled, InfoColumn } from './ItemExp.styled';

const ItemExp = ({ item, isGit }) => {
  const { startDate, finishDate, technologies, git, url, inProcess } = item;
  const isScreenTablet = window.matchMedia('(min-width: 768px)').matches;
  return (
    <>
      {isScreenTablet ? (
        <ItemExpStyled>
          <DateColumn finishDate={finishDate} startDate={startDate} />
          <LineColumn
            isGit={isGit}
            gitUrl={git}
            url={url}
            inProcess={inProcess}
          />
          <InfoColumn>
            <TitleExp item={item} />
            <ListExp technologies={technologies} />
          </InfoColumn>
        </ItemExpStyled>
      ) : (
        <>
          <ItemExpStyled>
            <DateColumn finishDate={finishDate} startDate={startDate} />
            <TitleExp item={item} />
          </ItemExpStyled>
          <ListExp technologies={technologies} />
        </>
      )}
    </>
  );
};

export default ItemExp;
