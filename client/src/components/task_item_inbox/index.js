import React from 'react'

import { Box, Text, Button } from 'grommet';
import { Checkmark, Close } from 'grommet-icons'

import { Link } from 'react-router-dom';

const index = ({ onApprove, onReject, onClick, isEven, ...props }) => {
  return (
    <Box round={{ size: "small" }} direction="row" margin={{ horizontal: 'medium' }}
      animation={{ delay: props.delay * 100, type: "fadeIn" }}
      background={isEven == true ? "light-0" : "#F2F3F5"} pad={{ vertical: 'medium', horizontal: 'xsmall' }} height="50px">
      <Box style={{ flex: 3 }} align="center" justify="center">

        <Button onClick={onClick}>
          <Text weight="bold" truncate>{props.workflowName}</Text>
        </Button>
      </Box>
      <Box style={{ flex: 6 }} align="center" justify="start" direction="row" gap="small">
        <Text weight="bold">[{props.actionType}]</Text>
        <Text >{props.actionDescription}</Text>
      </Box>
      <Box style={{ flex: 2 }} direction="column" align="center" justify="center" >
        <Text size="small">{props.createdAt}</Text>
      </Box>
    </Box>
  )
}

export default index


