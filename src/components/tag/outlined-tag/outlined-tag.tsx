import React, { FC } from 'react';
import { Styled } from './outlined-tag.styles';
import CloseIcon from '../../icons/close/close';

type OutlinedTagProps = {
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  onActionClick?: (event: MouseEvent) => void;
};

const OutlinedTag: FC<OutlinedTagProps> = ({
  size = 'small',
  closable = true,
  disabled = false,
  onClick,
  onActionClick,
  // ...rests => 설명 필요
}) => {
  return (
    <Styled.OutlinedTag size={size} onClick={disabled ? undefined : onClick} disabled={disabled}>
      <Styled.Content>
        <Styled.Text size={size} disabled={disabled}>
          this is a tag
        </Styled.Text>
        {closable && (
          <Styled.Close
            disabled={disabled}
            size={size}
            onClick={
              disabled
                ? undefined
                : (e: any) => {
                    if (onActionClick !== undefined) {
                      onActionClick(e);
                    }
                    e.stopPropagation();
                  }
            }
          >
            <CloseIcon />
          </Styled.Close>
        )}
      </Styled.Content>
    </Styled.OutlinedTag>
  );
};

export default OutlinedTag;
