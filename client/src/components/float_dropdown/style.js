import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0px;
left: 50%;
transform: translateX(-50%);
color: #f6f6f6;
font-size: 1.7rem;
z-index: 12;
`

export const CollapseButtonContainer = styled.div`
position: absolute;
top: 10px;
left: 50%;
transform: translateX(-50%) scale(0.8);
z-index: 15;
`

export const circleButton = {
  display: 'flex',
  padding: 5,
  justifyContent: 'center',
  borderRadius: '50%',
}