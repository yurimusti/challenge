import styled from 'styled-components'
import { Button as ButtonChakra } from '@chakra-ui/react'

export const ButtonPrimary = styled(ButtonChakra)`
  //reset button
  user-select: none;

  text-transform: uppercase;
  color: #fff;
  width: 264px !important;
  height: 60px !important;
  padding: 10px 10px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  background: transparent !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  font-size: 1rem;
  border-radius: 0.2rem !important;
  color: #ffff;
  border: 2.5px solid #ffffff;
  box-shadow: 0 5px 20px #ff0000, 0 0 5px #ff0000 inset,
    3px 3px 40px 5px #ff0000 inset;

  &::before {
    height: 0%;
    width: 2px;
  }

  &:hover {
    color: #fff;
    box-shadow: 0 3px 20px #ff0000, 0 0 60px #d70404 inset,
      0 0 50px #ff0000 inset;
    background-color: black;
  }
`

export const ButtonSecondary = styled(ButtonChakra)`
  text-transform: uppercase;
  color: #fff;
  width: 264px;
  height: 60px;
  padding: 10px 10px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: #ffff;
  border: 2.5px solid #ffffff;
  box-shadow: 0 5px 20px #33e9c6, 0 0 5px #33e9c6 inset,
    3px 3px 40px 5px #33e9c6 inset;

  &::before {
    height: 0%;
    width: 2px;
  }

  &:hover {
    color: #fff;
    box-shadow: 0 3px 20px #33e9c6, 0 0 60px #33e9c6 inset,
      0 0 50px #33e9c6 inset;
    background-color: black;
  }
`

export const ButtonAlt = styled(ButtonChakra)`
  text-transform: uppercase;
  color: #fff;
  width: 264px;
  height: 60px;
  padding: 10px 10px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: #ffffff;
  border: 2.5px solid #ffffff;
  box-shadow: 0 5px 20px #ffffff, 0 0 5px #ffffff inset,
    3px 3px 40px 5px #ffffff inset;

  &::before {
    height: 0%;
    width: 2px;
  }

  &:hover {
    color: #fff;
    box-shadow: 0 3px 20px #ffffff, 0 0 60px #ffffff inset,
      0 0 50px #ffffff inset;
    background-color: black;
  }
`
