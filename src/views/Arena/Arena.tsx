import React from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'
import Page from 'components/layout/Page'

const Arena: React.FC = () => {
  return (
    <Page>
      <Sound url="/sounds/penguin_arena_page.mp3" playStatus={Sound.status.PLAYING} loop />
      <ArenaBgContainer width="100%" height="100%" autoPlay loop muted>
        <source src="/videos/penguinarena.mp4" />
      </ArenaBgContainer>
    </Page>
  )
}

const ArenaBgContainer = styled.video`
  object-fit: fill;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
`

export default Arena
