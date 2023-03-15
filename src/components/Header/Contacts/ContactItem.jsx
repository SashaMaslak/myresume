import { BsTelephoneInbound, BsEnvelope } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import {
  StyledItem,
  IconWrapper,
  ContactTitleText,
  ContactText,
  ContactWrapper,
  LinkItem,
} from './ContactItem.styled';

const ContactItem = ({ title, text }) => {
  const func = title2 => {
    let url = '';

    switch (title2) {
      case 'Phone:':
        url = 'tel:+380954682172';
        return url;

      case 'Email:':
        url = 'mailto:owmaslak@google.com';
        return url;

      case 'Address:':
        url = 'https://goo.gl/maps/ynqhWXBtSKAtu43p6';
        return url;

      default:
        return url;
    }
  };

  return (
    <li>
      <LinkItem>
        <StyledItem>
          <IconWrapper>
            {title === 'Phone:' && <BsTelephoneInbound size={28} />}
            {title === 'Email:' && <BsEnvelope size={28} />}
            {title === 'Address:' && <SlLocationPin size={28} />}
          </IconWrapper>
          <ContactWrapper href={func(title)} target="_blank">
            <ContactTitleText>{title}</ContactTitleText>
            <ContactText>{text}</ContactText>
          </ContactWrapper>
        </StyledItem>
      </LinkItem>
    </li>
  );
};

export default ContactItem;