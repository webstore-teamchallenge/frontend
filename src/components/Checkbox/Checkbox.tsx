import { useState } from 'react';
import Icon from '../Icon/Icon';
import cn from 'classnames';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  props: CheckboxProps[];
};

export default function Checkbox({ props }: CheckboxGroupProps) {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setCheckedValues((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  return (
    <div className={styles.container}>
      {props.map((element) => (
        <label key={element.value} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={element.value}
            className={styles.checkbox}
            onChange={() => handleChange(element.value)}
          />
          <span
            className={cn(styles.customCheckbox, {
              [styles.checkedCustomCheckbox]: checkedValues.includes(element.value),
            })}
          >
            <Icon icon="checkmark" className={styles.icon} />
          </span>
          {element.label}
        </label>
      ))}
    </div>
  );
}
