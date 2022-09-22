import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Styles from './styles';

export default function InputGeneric({ name, domId, value, placeholder, size }) {
  const [search, setSearch] = useState('');

  console.log(search);
  return (
    <Styles.LabelGeneric htmlFor={ domId }>
      <p>{name}</p>
      <Styles.GenericInputText
        id={ domId }
        placeholder={ placeholder }
        size={ size }
        type="text"
        value={ value }
        onChange={ (event) => setSearch(event.target.value) }
      />
    </Styles.LabelGeneric>
  );
}

InputGeneric.propTypes = {
  domId: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
}.isRequired;