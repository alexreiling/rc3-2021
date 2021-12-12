import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: 'Changa', sans-serif;
  font-size: 24px;
  font-weight: bold;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string
  path: string
}

const MobileMenuItem: React.FC<Props> = (props) => {
  const { label, path, ...rest } = props
  return (
    <Wrapper {...rest}>
      <a href={path}>{label}</a>
    </Wrapper>
  )
}

export default MobileMenuItem
