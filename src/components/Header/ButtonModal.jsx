import { ButtonStyled } from './ButtonModal.styled';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

const ButtonModal = ({ isOpenModal }) => {
  const toggleModal = () => {
    return !isOpenModal;
  };
  return (
    <ButtonStyled type="button" click={toggleModal}>
      {isOpenModal ? <GrClose size={24} /> : <RxHamburgerMenu size={24} />}
    </ButtonStyled>
  );
};

export default ButtonModal;
