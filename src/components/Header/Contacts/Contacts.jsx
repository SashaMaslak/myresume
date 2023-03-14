import ContactItem from './ContactItem';
import { ContactsStyled, StyledList } from './Contacts.styled';

const Contacts = ({ contacts }) => {
  return (
    <ContactsStyled>
      <StyledList>
        {contacts.map(({ title, text }, idx) => (
          <ContactItem key={idx} title={title} text={text} />
        ))}
      </StyledList>
    </ContactsStyled>
  );
};

export default Contacts;
