import React, { Component } from 'react'

import { Box, FormField, TextInput, Button, Heading, Text, Image, TextArea } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { userActions } from 'actions';

import { colors } from 'theme';
import Spinner from 'react-spinkit'
import Files from "react-butterfiles";

import { post } from 'axios'

class ImageUploadExample extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('user')) {
      this.props.history.push('/home/my_flows');
    }

    this.state = {
      email: '',
      description: '',
      files: [],
      errors: [],
      image: ''
    };
  }
  onChangeTextArea = (e) => {
      console.log(e.target.value)
      this.setState({ description: e.target.value });
  }

  onChange(e){
      let files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload=(e)=>{
      console.log("image data: ", e.target.result)
    }

        const url="http://127.0.0.1:8000/api/service"
        const formData={file:e.target.result}
        return post(url.formData)
        .then(response=>console.log("result ", response)).catch((err)=> alert(err))
    }
  render() {
    return (
        <Box flex direction="column" align="center" justify="center" fill='vertical'>
            <Box responsive={false} pad='large' style={{ width: 500 }}
            round={{ size: 'small' }}
            animation='fadeIn'>
                <div>
                    <h1>Add Activity</h1>
                    <Box justify='center' direction='row' align='center' pad='medium'>
                        <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
                    </Box>
                    <br/>
                    <TextArea
                        rows="15"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onChangeTextArea}
                    ></TextArea>
                    <Box justify='center' direction='row' align='center' pad='medium'>
                        <Button hoverIndicator onClick={this.onForgot}>
                            <Text size='Large' weight='bold'>Save /</Text>
                        </Button>
                        <Button hoverIndicator style={{ marginLeft: 5 }} onClick={this.onSignup}>
                            <Text size='medium'>Cancel</Text>
                        </Button>
                    </Box>
                </div>
            </Box>
        </Box>
     
    
    )
  }
}



export default ImageUploadExample;
