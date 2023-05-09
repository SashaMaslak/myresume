import { MainStyled } from './Main.styled';
import Sidebar from './Sidebar/Sidebar';
import skills from '../../skills.json';
import Content from './Content/Content';
import experienceProjects from '../../experienceProjects.json';
import experienceWork from '../../experienceWork.json';
import experienceEduction from '../../experienceEduction.json';
import contacts from '../../contactsSidebar.json';

const Main = () => {
  return (
    <MainStyled>
      <Sidebar
        skills={skills}
        titleSidebarSkills="MY SKILLS"
        contacts={contacts}
        titleSidebarContacts="MY CONTACTS"
      />
      <Content
        titleExProjects="PROJECT EXPERIENCE"
        experienceProjects={experienceProjects}
        titleExWorks="WORK EXPERIENCE"
        experienceWork={experienceWork}
        titleExEducations="MY EDUCATION"
        experienceEduction={experienceEduction}
      />
    </MainStyled>
  );
};

export default Main;
