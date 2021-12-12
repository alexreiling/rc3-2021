import { css } from 'styled-components'

export const RELATIVE_HORIZONTAL_PADDING = 0.075
export const horizontalContentPadding = () => css`
  margin-left: auto;
  margin-right: auto;
  width: ${100 * (1 - 2 * RELATIVE_HORIZONTAL_PADDING)}vw;
`
