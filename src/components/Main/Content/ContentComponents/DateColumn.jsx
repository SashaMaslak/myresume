import { DateColumnStyled } from './DateColumn.styled.';

const DateColumn = ({ startDate, finishDate }) => {
  return (
    <DateColumnStyled>
      {finishDate && <p>{finishDate}</p>}
      {startDate && <p>{startDate}</p>}
    </DateColumnStyled>
  );
};

export default DateColumn;
