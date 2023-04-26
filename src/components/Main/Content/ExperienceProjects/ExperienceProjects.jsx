import ItemExp from '../ItemExp';

const ExperienceProjects = ({ experiences }) => {
  const isGit = experiences
    .map(item => item.hasOwnProperty('git'))
    .includes(true);

  return (
    <ul style={{ padding: 8 }}>
      {experiences.map((item, idx) => (
        <ItemExp key={idx} item={item} isGit={isGit} />
      ))}
    </ul>
  );
};

export default ExperienceProjects;
