import React, { FC } from 'react';
import { Styled } from './solid-tag.styles';
import SolidClose from '../../icons/close/solid-close';
import { any } from 'prop-types';

type SolidTagProps = {
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  onActionClick?: (event: MouseEvent) => void;
};

const SolidTag: FC<SolidTagProps> = ({
  size = 'small',
  closable = true,
  disabled = false,
  onClick,
  onActionClick,
  ...rest
}) => {
  return (
    <Styled.SolidTag size={size} onClick={onClick}>
      <Styled.Content>
        <Styled.Text size={size}>this is a tag</Styled.Text>
        {closable && (
          <Styled.SolidClose
            size={size}
            onClick={(e: any) => {
              if (onActionClick !== undefined) {
                onActionClick(e);
              }
              e.stopPropagation();
            }}
          >
            <SolidClose />
          </Styled.SolidClose>
        )}
      </Styled.Content>
    </Styled.SolidTag>
  );
};

export default SolidTag;
