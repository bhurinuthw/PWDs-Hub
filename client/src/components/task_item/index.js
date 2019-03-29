import React from 'react'
import { Box, Button, Text } from 'grommet'

export default function index({ name, owner, time, onSelectTask }) {
  return (
    <Box margin={{ vertical: 'small' }}>
      <Button onClick={onSelectTask}>
        <Text size="medium">{name}</Text>
      </Button>
      <Box direction="row" flex justify="between">
        <Text size="small" color="dark-6">{'by ' + owner}</Text>
        <Text size="small" color="dark-6">{time}</Text>
      </Box>
    </Box>
  )
}
