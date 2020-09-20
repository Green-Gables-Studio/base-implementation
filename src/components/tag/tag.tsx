import React, { FC } from 'react';
import SolidTag from './solid-tag/solid-tag';
import OutlinedTag from './outlined-tag/outlined-tag';

export type TagProps = {
  variant?: 'solid' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  closable?: boolean;
  onClick?: (event: MouseEvent) => void;
  onActionClick?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
};

const Tag: FC<TagProps> = ({ variant = 'outlined', disabled = false, ...rest }) => {
  if (variant === 'outlined') {
    return <OutlinedTag disabled={disabled} {...rest} />;
  }

  if (variant === 'solid' && disabled === true)
    return <OutlinedTag disabled={disabled} {...rest} />;

  if (variant === 'solid') {
    return <SolidTag disabled={disabled} {...rest} />;
  }

  return null;
};

export default Tag;
