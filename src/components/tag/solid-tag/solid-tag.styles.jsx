import styled from 'styled-components';

const SolidTag = styled.span`
  cursor: default;
  display: inline-block;
  background: #000000;
  border-radius: 24px;
  padding: 4px 8px;

  ${props => {
    switch (props.size) {
      case 'small': {
        return 'padding: 4px 8px;';
      }
      case 'medium': {
        return 'padding: 6px 12px;';
      }
      case 'large': {
        return 'padding: 8px 16px;';
      }
      default: {
        return null;
      }
    }
  }}
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  ${props => {
    switch (props.size) {
      case 'small': {
        return `
        font-size: 14px;
        line-height: 16px;`;
      }
      case 'medium': {
        return `
        font-size: 16px;
        line-height: 20px;`;
      }
      case 'large': {
        return `
        font-size: 18px;
        line-height: 24px;`;
      }
      default: {
        return null;
      }
    }
  }}
  font-family: system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #ffffff;
`;

const SolidClose = styled.span`
  cursor: pointer;
  ${props => {
    switch (props.size) {
      case 'small': {
        return 'margin-left: 8px;';
      }
      case 'medium': {
        return 'margin-left: 12px;';
      }
      case 'large': {
        return 'margin-left: 16px;';
      }
      default: {
        return null;
      }
    }
  }}

  svg {
    display: block;

    ${props => {
      switch (props.size) {
        case 'small': {
          return `
          width: 12px;
          height: 12px;`;
        }
        case 'medium': {
          return `
          width: 16px;
          height: 16px`;
        }
        case 'large': {
          return `
          width: 20px;
          height: 20px`;
        }
        default: {
          return null;
        }
      }
    }}
  }
`;
export const Styled = { SolidTag, Content, Text, SolidClose };
