import { StaticImageData } from 'next/image';

import { IconButton, Input } from '@mui/material';

import styled from 'styled-components';

export const ContainerHeader = styled.div<{ image: StaticImageData}>`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 138px;
  background-image: url(${props => props.image.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: content-box;
  border-radius: 8px;
`;

export const InputSearch = styled(Input)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 4px;
  background-color: #fff;
  color: #B9BDCF;

  #user-icon {
    margin: 20px;
    color: #B9BDCF;
  }
`;

export const Button = styled(IconButton)`
  background: #1E86FF;
  width: 146px;
  height: 47px;
  border-radius: 4px;
  margin: 4px;

  &:hover {
    background: #1E86FF;
    filter: brightness(0.8);
  }
`;