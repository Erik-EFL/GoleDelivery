import styled from 'styled-components';
import themes from '../themes/themes';

export const TableHeader = styled.table`
  border-collapse: collapse;
  width: 100%;
  th {
    font-size: ${themes.typography.textSize.md};
    text-align: center;
    padding: 8px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  flex: 1;
`;