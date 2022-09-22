import styled from 'styled-components';

const sizeHandleChange = (size) => {
  switch (size) {
  case 'sm':
    return `
        width: 371px;
      `;
  case 'md':
    return `
        width: 778px
      `;
  default:
    return `
        width: 325px;
      `;
  }
};

export const GenericSelect = styled.select`
  background: #FFFFFF;
  border: 1px solid #001813;
  border-radius: 5px;
  padding: 11px;
  color: #001813;

  ${({ size }) => sizeHandleChange(size)}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;
