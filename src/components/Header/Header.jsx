import { useState } from 'react';
import { HeaderStyled, ButtonStyled, About, Hero } from './Header.styled';
import Avatar from './Avatar/Avatar';
import photo from '../../images/photo.jpg';
import Summary from './Summary/Summary';
import Introduce from './Introduce/Introduce';
import Contacts from './Contacts/Contacts';
import OtherInfo from './OtherInfo/OtherInfo';
import contacts from '../../json/contacts.json';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isScreenTablet = window.matchMedia('(min-width: 768px)').matches;

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <HeaderStyled>
      <About>
        {!isScreenTablet && (
          <ButtonStyled type="button" onClick={toggleModal}>
            {isOpenModal ? (
              <RxHamburgerMenu size={24} />
            ) : (
              <GrClose size={24} />
            )}
          </ButtonStyled>
        )}

        <Avatar src={photo} alt="photo" />

        {!isOpenModal && (
          <Summary
            title="S U M M A R Y"
            text="I am a Junior Full-Stack Developer with a strong foundation in HTML, CSS, SASS, JavaScript, TypeScript, React, Next.js, Node.js, and Nest.js. My experience includes completing intensive courses, personal projects, and team collaborations. With an Intermediate level of English, I am seeking a remote position. I am passionate about development, continuous learning, and improving my skills. My goal is to grow within a dynamic team and contribute to driving innovation and success."
          />
        )}
      </About>
      <Hero>
        <Introduce
          name="OLEKSANDR MASLAK"
          profession="JUNIOR FULL-STACK DEVELOPER"
        />
        <Contacts contacts={contacts} />
        {isScreenTablet && <OtherInfo />}
      </Hero>
    </HeaderStyled>
  );
};

export default Header;
