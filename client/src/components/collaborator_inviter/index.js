import React from 'react'
import Chips from 'react-chips'
import theme, { chipTheme } from './chips_theme'

export default function index({ selectedCollaborators, userIds, onChangecollaborators }) {
  return (
    <Chips
      placeholder="Collaborators ( optional )"
      alwaysRenderSuggestions
      theme={theme}
      chipTheme={chipTheme}
      value={selectedCollaborators}
      onChange={onChangecollaborators}
      suggestions={userIds} />
  )
}
