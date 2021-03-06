import styled from 'styled-components';

export const Anchor = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.prime};
`;
