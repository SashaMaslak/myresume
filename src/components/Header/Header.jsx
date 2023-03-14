import { useState } from 'react';
import { HeaderStyled, About, Hero } from './Header.styled';
import { ButtonStyled } from './Header.styled';
import Avatar from './Avatar/Avatar';
import photo from '../../images/photo.jpg';
import Summary from './Summary/Summary';
import Introduce from './Introduce/Introduce';
// import Contacts from './Contacts/Contacts';
// import OtherInfo from './OtherInfo/OtherInfo';
// import contacts from '../../contacts.json';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const toggleModal = () => {
    setisOpenModal(!isOpenModal);
  };
  return (
    <HeaderStyled>
      <About>
        <ButtonStyled type="button" onClick={toggleModal}>
          {isOpenModal && <RxHamburgerMenu size={24} />}
          {!isOpenModal && <GrClose size={24} />}
        </ButtonStyled>
        <Avatar src={photo} alt="photo" />

        {!isOpenModal && (
          <Summary
            title="S U M M A R Y"
            text="I am a Junior Front-End developer. I focus on HTML5, CSS3, JS, React. English — Pre-Intermediate. Looking for a remote job. Development, practice and work for the result are important for me. I intend to develop innovative technologies and deliver value to people."
          />
        )}
      </About>
      <Hero>
        <Introduce
          name="OLEKSANDR MASLAK"
          profession="JUNIOR FROND-END DEVELOPER"
        />
        {/* <Contacts contacts={contacts} />
        <OtherInfo /> */}
      </Hero>
    </HeaderStyled>
  );
};

export default Header;
