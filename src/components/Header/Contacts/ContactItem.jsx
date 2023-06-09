import { BsEnvelope } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { TbBrandTelegram } from 'react-icons/tb';

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
      case 'Telegram:':
        url = 'https://t.me/OlexandrMaslak';
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
            {title === 'Telegram:' && <TbBrandTelegram size={28} />}
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
