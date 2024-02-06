import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-3 py-1 hover:bg-yellow-300 rounded" key={route.id}>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
