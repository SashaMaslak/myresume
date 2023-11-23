import {
  SidebarStyled,
  TitleSkills,
  TitleItemSkills,
  ListSkills,
  BlockItemSkills,
  ItemSkills,
  ItemContacts,
  ItemLink,
  BsLinkedinStyled,
  BsGithubStyled,
  BsTelegramStyled,
  BsEnvelopeAtStyled,
  HiLocationMarkerStyled,
  BsFillPhoneVibrateFillStyled,
} from './Sidebar.styled';

const Sidebar = ({
  skills,
  titleSidebarSkills,
  contacts,
  titleSidebarContacts,
}) => {
  const func = (title, link) => {
    switch (title) {
      case 'Telegram':
        return (
          <ItemLink href={link} target="_blank">
            <BsTelegramStyled size={18} />
            {title}
          </ItemLink>
        );
      case 'Linkedin':
        return (
          <ItemLink href={link} target="_blank">
            <BsLinkedinStyled size={18} />
            {title}
          </ItemLink>
        );
      case 'Github':
        return (
          <ItemLink href={link} target="_blank">
            <BsGithubStyled size={18} />
            {title}
          </ItemLink>
        );
      case 'owmaslak@gmail.com':
        return (
          <ItemLink href={link} target="_blank">
            <BsEnvelopeAtStyled size={18} />
            {title}
          </ItemLink>
        );
      case 'UA, Dnipropetrovsk region':
        return (
          <ItemLink href={link} target="_blank">
            <HiLocationMarkerStyled size={18} />
            {title}
          </ItemLink>
        );
      case '+380954682172':
        return (
          <ItemLink href={link} target="_blank">
            <BsFillPhoneVibrateFillStyled size={18} />
            {title}
          </ItemLink>
        );

      default:
        return <span href="">{title}</span>;
    }
  };

  return (
    <SidebarStyled>
      <TitleSkills>{titleSidebarContacts}</TitleSkills>
      <ListSkills>
        {contacts.map(({ title, link }, idx) => (
          <ItemContacts key={idx}>{func(title, link)}</ItemContacts>
        ))}
      </ListSkills>
      <TitleSkills>{titleSidebarSkills}</TitleSkills>
      {skills.map(({ title, skillsList }, idx) => (
        <BlockItemSkills key={idx}>
          <TitleItemSkills>{title}</TitleItemSkills>
          <ListSkills>
            {skillsList.map((skillsItem, idx) => {
              return <ItemSkills key={idx}>{func(skillsItem)}</ItemSkills>;
            })}
          </ListSkills>
        </BlockItemSkills>
      ))}
    </SidebarStyled>
  );
};

export default Sidebar;
