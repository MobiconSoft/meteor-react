import styled from 'styled-components';

export const JPage = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  height: 100%;
  width: 100%;
`;

export const JRow = styled.div`
  display: flex;
  justify-content: ${ props => props.align || 'flex-start' };
  align-items: ${ props => props.align || 'center' };
  width: ${ props => props.width || '100%' };
  padding: ${ props => props.padding || '5px' };
  font-size: ${ props => props.fontSize || '14px' };
`;