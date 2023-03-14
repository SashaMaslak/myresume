import { MainStyled } from './Main.styled';
import Sidebar from './Sidebar/Sidebar';
import skills from '../../skills.json';
import Content from './Content/Content';
import experienceProjects from '../../experienceProjects.json';
import experienceWork from '../../experienceWork.json';
import experienceEduction from '../../experienceEduction.json';

const Main = () => {
  return (
    <MainStyled>
      <Sidebar skills={skills} titleSidebar="MY SKILLS" />
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
