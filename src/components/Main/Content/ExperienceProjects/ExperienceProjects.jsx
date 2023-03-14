import ItemExp from '../ItemExp';

const ExperienceProjects = ({ experiences }) => {
  return (
    <ul style={{ padding: 8 }}>
      {experiences.map((item, idx) => (
        <ItemExp key={idx} item={item} />
      ))}
    </ul>
  );
};

export default ExperienceProjects;
