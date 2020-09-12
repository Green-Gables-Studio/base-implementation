import styled from 'styled-components';

const Tag = styled.span`
  display: inline-block;
  background: #ffffff;
  border-radius: 24px;
  border: 2px solid #afafaf;
  padding: 2px 6px;
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-family: system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
`;

const Close = styled.span`
  margin-left: 8px;

  svg {
    display: block;
  }
`;

export const Styled = { Tag, Content, Text, Close };
