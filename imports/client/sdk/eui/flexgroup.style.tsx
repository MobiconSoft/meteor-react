import styled from 'styled-components';
import { EuiFlexItem, EuiFlexGroup } from '@elastic/eui';

export const StyledWidthEuiFlexGroup = styled(EuiFlexGroup)`
  width: ${props => props.width || '100%'};
`;

export const StyledLongEuiFlexItem = styled(EuiFlexItem)`
  max-width: 400px;
  input {
    background: ${props => props.bgcolor || 'white'};
    color: white;
  }
`;

export const StyledShortEuiFlexItem = styled(EuiFlexItem)`
  max-width: 100px;
`;