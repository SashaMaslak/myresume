import { AvatarStyled, Photo } from './Avatar.styled';

const Avatar = ({ src, alt }) => {
  return (
    <AvatarStyled>
      <Photo src={src} alt={alt} />
    </AvatarStyled>
  );
};

export default Avatar;
