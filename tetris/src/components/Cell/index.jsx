import PropTypes from "prop-types";

import styles from "./index.module.css";

export function Cell(props) {
  const { type } = props;

  const getColor = (type) => {
    switch (type) {
      case 0:
        return "white";
      case 1:
        return "blue";
      default:
        return "transparent";
    }
  };

  return (
    <div
      className={styles.cell}
      style={{ backgroundColor: getColor(type) }}
    ></div>
  );
}

Cell.propTypes = {
  type: PropTypes.oneOf([0, 1]).isRequired,
};
