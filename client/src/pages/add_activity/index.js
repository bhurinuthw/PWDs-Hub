import React, { Component } from 'react'

import { Box, FormField, TextInput, Button, Heading, Text, Image } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { userActions } from 'actions';

import { colors } from 'theme';
import Spinner from 'react-spinkit'
import Files from "react-butterfiles";

class ImageUploadExample extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('user')) {
      this.props.history.push('/home/my_flows');
    }

    this.state = {
      email: '',
      password: '',
    };
  }

 
  render() {
    return (
        <Files
        multiple={false} maxSize="2mb" multipleMaxSize="10mb" accept={["application/pdf","image/jpg","image/jpeg"]}
        onSuccess={files => this.setState({ files })}
        onError={errors => this.setState({ errors })}
    >
        {({ browseFiles }) => (
            <div>
                <button onClick={browseFiles}>Upload PDF</button>
                <ol>
                    {this.state.files.map(file => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                    {this.state.errors.map(error => (
                        <li key={error.file.name}>
                            {error.file.name} - {error.type}
                        </li>
                    ))}
                </ol>
            </div>
        )}
    </Files>
    )
  }
}



export default ImageUploadExample;
