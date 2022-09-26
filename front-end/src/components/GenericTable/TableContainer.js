import PropTypes from 'prop-types';
import React from 'react';
import * as Styles from './styles';

const renderTable = (pageType, userType) => {
  if (userType === 'costumer' && pageType === 'Detalhes do Pedido') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '10rem' } }>Item</th>
          <th style={ { width: '60rem' } }>Descrição</th>
          <th style={ { width: '10rem' } }>Quantidade</th>
          <th style={ { width: '10rem' } }>Valor Unitário</th>
          <th style={ { width: '10rem' } }>Sub-Total</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Detalhes do Pedido' && userType === 'vendedor') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '10rem' } }>Item</th>
          <th style={ { width: '60rem' } }>Descrição</th>
          <th style={ { width: '10rem' } }>Quantidade</th>
          <th style={ { width: '10rem' } }>Valor Unitário</th>
          <th style={ { width: '10rem' } }>Sub-Total</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
  if (pageType === 'Finalizar Pedido' && userType === 'vendedor') {
    return (
      <Styles.TableHeader>
        <tr>
          <th style={ { width: '10rem' } }>Item</th>
          <th style={ { width: '50rem' } }>Descrição</th>
          <th style={ { width: '10rem' } }>Quantidade</th>
          <th style={ { width: '10rem' } }>Valor Unitário</th>
          <th style={ { width: '10rem' } }>Sub-Total</th>
          <th style={ { width: '10rem' } }>Remover item</th>
        </tr>
        {/* criar a função para gerar as linhas da tabela */}
      </Styles.TableHeader>
    );
  }
};

function TableContainer({ pageName, userRole }) {
  return (
    <>
      {
        renderTable(pageName, userRole)
      }
    </>
  );
}

TableContainer.propTypes = {
  userRole: PropTypes.string,
  pageName: PropTypes.string,
}.isRequired;

export default TableContainer;