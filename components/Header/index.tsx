import { HTMLAttributes, useEffect } from 'react'
import { SizeMeProps, withSize } from 'react-sizeme'
import styled from 'styled-components'
import Logo from './Logo'
import MenuToggle from './MenuToggle'

const Wrapper = styled.div`
  pointer-events: auto;
  > * {
    display: inline-block;
  }
  > :nth-child(2) {
    float: right;
  }
`

interface Props extends HTMLAttributes<HTMLDivElement>, SizeMeProps {
  open: boolean
  onChangeOpen: (open: boolean) => any
}

const Header: React.FC<Props> = (props) => {
  const { open, onChangeOpen, size, ...rest } = props
  return (
    <Wrapper {...rest}>
      <Logo />
      <MenuToggle onClick={() => onChangeOpen(!open)} />
    </Wrapper>
  )
}

export default withSize({ monitorHeight: true })(Header)
