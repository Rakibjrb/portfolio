import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center text-white mb-10">
      <h3 className="text-xl mb-4">{subtitle}</h3>
      <h1 className="text-5xl">{title}</h1>
    </div>
  );
};
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionHeader;
