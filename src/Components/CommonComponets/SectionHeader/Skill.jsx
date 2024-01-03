import PropTypes from "prop-types";

const Skill = ({ skill }) => {
  return (
    <div key={skill.id}>
      <div className="flex justify-between">
        <h2 className="uppercase font-semibold">{skill?.skill}</h2>
        <h2>{skill?.parcentage}%</h2>
      </div>
      <progress
        className="progress progress-info w-full"
        value={skill.parcentage}
        max="100"
      ></progress>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.object,
};
export default Skill;
