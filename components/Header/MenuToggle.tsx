import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { linkStyle } from '../../styles/mixins/linkStyle'

const Wrapper = styled.div`
  ${linkStyle}
  text-shadow: -2px 2px 2px rgba(0, 0, 0, 1);
`

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MenuToggle: React.FC<Props> = (props) => {
  const { ...rest } = props
  return (
    <Wrapper {...rest} id="menu-toggle">
      Menu
    </Wrapper>
  )
}

export default MenuToggle
