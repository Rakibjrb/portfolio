import PropTypes from "prop-types";

const SectionHeader = ({ title }) => {
  return (
    <div className="text-center text-white mb-10 font-lato">
      <h1
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-5xl font-lato"
      >
        {title}
      </h1>
    </div>
  );
};
SectionHeader.propTypes = {
  title: PropTypes.string,
};
export default SectionHeader;
