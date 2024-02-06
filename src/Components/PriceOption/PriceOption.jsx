import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { id, name, price } = option;
  return (
    <div>
      <h3>Name:{name}</h3>
      <h3>Price:{price}</h3>
    </div>
  );
};

PriceOption.propType = {
  option: PropTypes.object,
};
export default PriceOption;
