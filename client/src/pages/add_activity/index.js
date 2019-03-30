import React, { Component } from 'react'

import { Box, FormField, TextInput, Button, Heading, Text, Image } from 'grommet';
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
      password: '',
      files: [],
      errors: [],
      image: ''
    };
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
        <div>
            <h1>react js upload file</h1>
            <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>

        </div>
    )
  }
}



export default ImageUploadExample;
