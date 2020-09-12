import React from 'react';
import { Styled } from './tag.styles';
import CloseIcon from '../icons/close/close';

const Tag = () => {
  return (
    <Styled.Tag>
      <Styled.Content>
        <Styled.Text>this is a tag</Styled.Text>
        <Styled.Close>
          <CloseIcon />
        </Styled.Close>
      </Styled.Content>
    </Styled.Tag>
  );
};

export default Tag;
