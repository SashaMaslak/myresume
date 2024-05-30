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
            text="I am a Junior Full-Stack Developer with a focus on HTML, CSS, SASS, JS, Typescript, React, Next, Node, Nest - technologies. I have a Pre-Intermediate level of English and am looking for a remote job. Development, continuous practice, and achieving results are important to me. My goal is to find a rewarding position and become an integral part of a professional team!"
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
