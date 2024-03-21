import { BsGithub } from 'react-icons/bs';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { GiSandsOfTime } from 'react-icons/gi';

import { IconStyled, IconSandStyled, Link } from './IconItem.styled';

const IconItem = ({ isGit, gitUrl, inProcess }) => {
  const isScreenDesctop = window.matchMedia('(min-width: 1024px)').matches;
  let size = isScreenDesctop ? '30px' : '20px';
  if (isGit) {
    return (
      <Link href={gitUrl} target="_blank">
        <IconStyled>
          <BsGithub size={size} />
        </IconStyled>
      </Link>
    );
  } else {
    if (inProcess) {
      console.log('ONE IF:', inProcess);
      return (
        <Link href={gitUrl} target="_blank">
          <IconSandStyled>
            <GiSandsOfTime size="20px" />
          </IconSandStyled>
        </Link>
      );
    } else {
      console.log('ELSE:', inProcess);
      return (
        <Link href={gitUrl} target="_blank">
          <IconStyled>
            <IoMdCheckmarkCircle size={size} />
          </IconStyled>
        </Link>
      );
    }
  }
};

export default IconItem;
