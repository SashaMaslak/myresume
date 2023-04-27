import { useState } from 'react';
import { HeaderStyled, ButtonStyled, About, Hero } from './Header.styled';
import Avatar from './Avatar/Avatar';
import photo from '../../images/photo.jpg';
import Summary from './Summary/Summary';
import Introduce from './Introduce/Introduce';
import Contacts from './Contacts/Contacts';
import OtherInfo from './OtherInfo/OtherInfo';
import contacts from '../../contacts.json';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [isScreenTablet, setIsScreenTablet] = useState(
  //   window.matchMedia('(min-width: 768px)').matches
  // );

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
            text="I am a Junior Front-End developer. I focus on HTML5, CSS3, JS, React. English — Pre-Intermediate. Looking for a remote job. Development, practice and work for the result are important for me. My goal is to find a decent job and become an integral part of a team of professionals!"
          />
        )}
      </About>
      <Hero>
        <Introduce
          name="OLEKSANDR MASLAK"
          profession="JUNIOR FROND-END DEVELOPER"
        />
        <Contacts contacts={contacts} />
        {isScreenTablet && <OtherInfo />}
      </Hero>
    </HeaderStyled>
  );
};

export default Header;
