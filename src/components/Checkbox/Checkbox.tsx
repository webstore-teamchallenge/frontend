import Icon from '../Icon/Icon';
import cn from 'classnames';

import styles from './Checkbox.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../redux/store';

import { selectCategoriesFilters } from '../../redux/filters/selectors';

import { addCategoriesFilters, removeCategoriesFilters } from '../../redux/filters/slice';

type CheckboxProps = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  items: CheckboxProps[];
};

export default function Checkbox({ items }: CheckboxGroupProps) {
  const dispatch: AppDispatch = useDispatch();
  const selectedCategories = useSelector(selectCategoriesFilters);

  const handleChange = (value: string) => {
    if (selectedCategories.includes(value)) {
      dispatch(removeCategoriesFilters(value));
    } else {
      dispatch(addCategoriesFilters(value));
    }
  };
  console.log(selectedCategories);

  return (
    <div className={styles.container}>
      {items.map((element) => (
        <label key={element.value} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={element.value}
            className={styles.checkbox}
            onChange={() => handleChange(element.value)}
            checked={selectedCategories.includes(element.value)}
          />
          <span
            className={cn(styles.customCheckbox, {
              [styles.checkedCustomCheckbox]: selectedCategories.includes(element.value),
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
