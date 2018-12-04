import styled from 'styled-components';
import { EuiFlexItem, EuiFlexGroup } from '@elastic/eui';

export const JFlexGroup = styled(EuiFlexGroup)`
  width: ${props => props.width || '100%'};
`;

export const JFlexItem = styled(EuiFlexItem)`
  max-width: ${ props => props.width || '800px'} ;
  input {
    background: ${props => props.background || 'white' };
    color: ${props => props.color || 'black' };
  }
`;
