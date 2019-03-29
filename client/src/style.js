import styled from 'styled-components'

export const FillParent = styled.div`
  width: 100%;
  height: 100%;
`
export const global = {
  globalContainer: {
    width: '100%',
    height: 'calc(100% - 60px)',
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingTop: 60,
    backgroundColor: '#f6f6f6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    maxWidth: 1200,
    padding: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
};
