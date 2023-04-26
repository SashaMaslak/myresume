import {
  SidebarStyled,
  TitleSkills,
  TitleItemSkills,
  ListSkills,
  BlockItemSkills,
  ItemSkills,
  ItemLink,
  BsLinkedinStyled,
  BsGithubStyled,
  BsTelegramStyled,
} from './Sidebar.styled';

const Sidebar = ({ skills, titleSidebar }) => {
  const func = skillsItem => {
    switch (skillsItem) {
      case 'Linkedin':
        return (
          <ItemLink
            href="https://www.linkedin.com/in/oleksandr-maslak/"
            target="_blank"
          >
            <BsLinkedinStyled size={18} />
            {skillsItem}
          </ItemLink>
        );

      case 'Github':
        return (
          <ItemLink href="https://github.com/SashaMaslak" target="_blank">
            <BsGithubStyled size={18} />
            {skillsItem}
          </ItemLink>
        );

      case 'Telegram':
        return (
          <ItemLink href="https://t.me/OlexandrMaslak" target="_blank">
            <BsTelegramStyled size={18} />
            {skillsItem}
          </ItemLink>
        );

      default:
        return <span href="">{skillsItem}</span>;
    }
  };

  return (
    <SidebarStyled>
      <TitleSkills>{titleSidebar}</TitleSkills>
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

// {
//   switch (skillsItem) {
//     case 'Linkedin':
//       <a>{skillsItem}</a>;
//       break;
//     case 'Telegram':
//       <a>{skillsItem}</a>;
//       break;
//     case 'Github':
//       <a>{skillsItem}</a>;
//       break;
//     default:
//       skillsItem;

//   }
// }
