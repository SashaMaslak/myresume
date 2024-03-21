import { MainStyled } from './Main.styled';
import Sidebar from './Sidebar/Sidebar';
import skills from '../../json/skills.json';
import Content from './Content/Content';
import experienceProjects from '../../json/experienceProjects.json';
import experienceWork from '../../json/experienceWork.json';
import experienceEduction from '../../json/experienceEduction.json';
import contacts from '../../json/contactsSidebar.json';

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
