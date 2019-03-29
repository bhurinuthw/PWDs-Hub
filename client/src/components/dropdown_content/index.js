import React from 'react'

import { Box, Button, Heading, Text } from 'grommet'
import { FormUp } from 'grommet-icons'

const DropContent = ({ onClose, onSelect, title, items }) => (
  <Box pad="small">
    <Box direction="row" justify="between" align="center">
      <Heading level={3} margin="small">
        {title}
      </Heading>
    </Box>

    {items.map((item, index) => (
      <Button key={index} hoverIndicator alignSelf="start" fill onClick={() => { onSelect(item.label, index) }} >
        <Box fill pad="small" direction="row" align="center" gap="small">
          <Text alignSelf="start">{item.label}</Text>
        </Box>
      </Button>
    ))}

  </Box>
);

export default DropContent