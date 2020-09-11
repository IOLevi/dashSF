import styles from './styles/Switch.module.css';

const Switch = ({ isOn, handleToggle }) => {
    return (
        <span>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={styles.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className={styles.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span className={styles.reactSwitchButton} />
            </label>
        </span>
    );
};

export default Switch;