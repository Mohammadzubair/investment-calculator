import { PropTypes } from "prop-types";
import styles from "./InputField.module.scss";

const InputField = ({ label, onChange, value }) => {
  return (
    <div className={styles.mainInputFieldBox}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        className={styles.inputField}
        type="number"
        required
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
};
