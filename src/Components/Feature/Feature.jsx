import PropTypes from "prop-types";
import { FaCheckDouble } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex">
        <FaCheckDouble className="text-green-600"></FaCheckDouble>
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
