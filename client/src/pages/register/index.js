import React, { Component } from 'react'

import {
  Box, FormField, TextInput,
  Button, Image, Tab, Select, Tabs
} from 'grommet';
import { UserNew, Checkmark } from 'grommet-icons';
import { connect } from 'react-redux'
import { userActions } from 'actions';
import { withRouter } from 'react-router-dom';

import { Row, Col } from 'react-flexbox-grid';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identityNumber: '',
      namePrefix: '',
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      password: '',
      confirmPass: '',
      passwordError: null,

      defectiveType: '',
      defectiveOptions: [
        'การมองเห็น',
        'การได้ยิน',
        'ทางร่างกาย',
        'ทางจิตใจ',
        'ทางสติปัญญา',
        'ทางการเรียนรู้',
        'ทางออทิสติก'
      ],
    };
  }

  onChangeIdentityNumber = (e) => {
    this.setState({ identityNumber: e.target.value });
  }
  onChangeNamePrefix = (e) => {
    this.setState({ namePrefix: e.target.value });
  }
  onChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  }
  onChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  }
  onChangeTelephone = (e) => {
    this.setState({ telephone: e.target.value });
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onChangeConfirmPass = (e) => {
    this.setState({ confirmPass: e.target.value });

    //test/base/iceyo
    // this.props.history.push('/iceyo')
  }

  onChangeDefectiveType = (defectiveType) => {
    console.log(defectiveType);
    this.setState({ defectiveType: defectiveType });
  }

  onRegister = () => {
    const { username, email, password, confirmPass } = this.state;

    if (password !== confirmPass) {
      this.setState({ passwordError: 'Password must be the same' });
      return;
    }

    const userInfo = {
      username: username,
      email: email,
      password: password,
      first_name: 'Anonymous_firstname',
      last_name: 'Anonymouse_lastname',
    };

    this.setState({ passwordError: null });
    this.props.history.push('/home');
    // this.props.dispatch(userActions.register(userInfo))
  }

  renderTab1Content = () => {
    return (
      <Box gap="small">
        <FormField >
          <TextInput
            ref='identityNumber'
            autoFocus
            placeholder="เลขบัตรประชาชน"
            value={this.state.identityNumber}
            onChange={this.onChangeIdentityNumber} />
        </FormField>

        <Box direction="row" gap="small">
          <FormField >
            <TextInput
              ref='namePrefix'
              autoFocus
              placeholder="คำนำหน้าชื่อ"
              value={this.state.namePrefix}
              onChange={this.onChangeNamePrefix} />
          </FormField>
          <FormField >
            <TextInput
              ref='firstName'
              autoFocus
              placeholder="ชื่อจริง"
              value={this.state.firstName}
              onChange={this.onChangeFirstName} />
          </FormField>
          <FormField style={{ display: 'flex', flex: 1, }}>
            <TextInput
              ref='lastName'
              autoFocus
              placeholder="นามสกุล"
              value={this.state.lastName}
              onChange={this.onChangeLastName} />
          </FormField>
        </Box>

        <Box direction="row" gap="small">
          <FormField style={{ display: 'flex', flex: 1 }}>
            <TextInput
              ref='emailInput'
              autoFocus
              placeholder="อีเมลล์ ( Email )"
              value={this.state.email}
              onChange={this.onChangeEmail} />
          </FormField>

          <FormField style={{ display: 'flex', flex: 1 }}>
            <TextInput
              ref='telephone'
              autoFocus
              placeholder="เบอร์์โทรศัพท์"
              value={this.state.lastName}
              onChange={this.onChangeTelephone} />
          </FormField>

          <FormField style={{ display: 'flex', flex: 1 }}>
            <Select
              placeholder="ประเภทความพิการ"
              onChange={( defectiveType ) => this.onChangeDefectiveType(defectiveType)}
              value={this.state.defectiveType}
              options={this.state.defectiveOptions} />
          </FormField>
        </Box>
      </Box>
    );
  }


  render() {
    const { passwordError } = this.state;

    return (
      <Box flex direction="column" back align="center" justify="center" fill='vertical'>
        <Box pad='medium' style={{ maxWidth: 700 }}
          round={{ size: 'small' }}
          animation='fadeIn'>
          {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}


          <Tabs alignSelf="start">
            <Tab title="ผู้พิการ">
              {this.renderTab1Content()}
            </Tab>
            <Tab title="หน่วยงาน">
              1
            </Tab>
            <Tab title="บริษัท">
              2
            </Tab>
          </Tabs>

          {/* Password Inputs */}
          <Box gap="small" direction="row">
            <FormField style={{ display: 'flex', flex: 1 }}
              error={passwordError}>
              <TextInput
                placeholder="รหัสผ่าน"
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword} />
            </FormField>
            <FormField style={{ display: 'flex', flex: 1 }}
              error={passwordError}>
              <TextInput
                placeholder="ยืนยันรหัสผ่าน"
                type="password"
                value={this.state.confirmPass}
                onChange={this.onChangeConfirmPass} />
            </FormField>
          </Box>



          <Box pad="small" direction="row" justify="end" >
            <Button primary icon={<Checkmark />} label="ยืนยัน" onClick={this.onRegister} />
          </Box>


        </Box>
      </Box >
    )
  }
}

export default withRouter(connect(null, null)(Register));