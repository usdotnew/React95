import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { Icon } from '@react95/core';

const ComponentIcon = styled(Icon)`
  display: inline-block;
  flex-shrink: 0;
  margin-bottom: 2px;
`;

const ComponentName = styled.span`
  padding: 2px;
  color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  text-align: center;
`;

const ComponentFile = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 10px 10px 10px;
  width: 60px;
  height: 65px;

  cursor: inherit;
  text-decoration: none;

  ${props =>
    props.focused
      ? css`
          ${ComponentName} {
            background-color: #000e7a;
            border: 1px dotted;
            padding: 1px;
          }
        `
      : ''}
`;

const File = ({ icon, name, ...props }) => {
  const [focus, toggleFocus] = useState(false);
  const handleFocus = () => toggleFocus(!focus);

  return (
    <ComponentFile
      href="#"
      onFocus={handleFocus}
      onBlur={handleFocus}
      focused={focus}
      {...props}
    >
      <ComponentIcon
        name={icon}
        fallback={false}
        size={32}
        width={32}
        height={32}
        focus={focus}
      />
      <ComponentName>{name}</ComponentName>
    </ComponentFile>
  );
};

File.propTypes = {
  icon: string.isRequired,
  name: string.isRequired,
};

export default File;
