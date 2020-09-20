import styled from 'styled-components';

const OutlinedTag = styled.span`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  display: inline-block;
  background: #ffffff;
  border-radius: 24px;
  border: ${props => (props.disabled ? '2px solid #e2e2e2' : '2px solid #afafaf')};

  ${props => {
    switch (props.size) {
      case 'small': {
        return 'padding: 2px 6px;';
      }
      case 'medium': {
        return 'padding: 4px 10px;';
      }
      case 'large': {
        return 'padding: 6px 14px;';
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
  color: ${props => (props.disabled ? '#afafaf' : '#000000')};
`;

const Close = styled.span`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

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
          height: 16px;`;
        }
        case 'large': {
          return `
          width: 20px;
          height: 20px;`;
        }
        default: {
          return null;
        }
      }
    }}

    path {
      fill: ${props => (props.disabled ? '#afafaf' : '#000000')};
    }
  }
`;

export const Styled = { OutlinedTag, Content, Text, Close };
