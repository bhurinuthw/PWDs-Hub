import React, { Component, PureComponent } from 'react'

import {
  Box, FormField, TextInput,
  Button, Image, Tab, Select, Tabs, Text, CheckBox
} from 'grommet';
import { UserNew, Checkmark } from 'grommet-icons';
import { connect } from 'react-redux'
import { userActions } from 'actions';
import { withRouter } from 'react-router-dom';

import { Row, Col } from 'react-flexbox-grid';

class Option extends PureComponent {
  render() {
    const { value, selected } = this.props;
    return (
      <Box direction="row" gap="small" align="center" pad="xsmall">
        <CheckBox tabIndex="-1" checked={selected} onChange={() => { }} />
        {value}
      </Box>
    );
  }
}


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n_id: '',
      prefix: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      confirmPass: '',
      passwordError: null,

      roles: ['pwd', 'department', 'company'],
      category: [],
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
    this.setState({ n_id: e.target.value });
  }
  onChangeNamePrefix = (e) => {
    this.setState({ prefix: e.target.value });
  }
  onChangeFirstName = (e) => {
    this.setState({ name: e.target.value });
  }
  onChangeLastName = (e) => {
    this.setState({ surname: e.target.value });
  }
  onChangeTelephone = (e) => {
    this.setState({ phone: e.target.value });
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

  onChangeDefectiveType = ({ category }) => {
    console.log(category);
    this.setState({ category: category });
  }

  setActiveTab = (index) => {
    const role = this.state.roles[index];


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
    const { category, defectiveOptions } = this.state;
    return (
      <Box gap="small">
        <FormField >
          <TextInput
            ref='n_id'
            autoFocus
            placeholder="เลขบัตรประชาชน"
            value={this.state.n_id}
            onChange={this.onChangeIdentityNumber} />
        </FormField>

        <Box direction="row" gap="small">
          <FormField >
            <TextInput
              ref='prefix'
              autoFocus
              placeholder="คำนำหน้าชื่อ"
              value={this.state.prefix}
              onChange={this.onChangeNamePrefix} />
          </FormField>
          <FormField >
            <TextInput
              ref='name'
              autoFocus
              placeholder="ชื่อจริง"
              value={this.state.name}
              onChange={this.onChangeFirstName} />
          </FormField>
          <FormField style={{ display: 'flex', flex: 1, }}>
            <TextInput
              ref='surname'
              autoFocus
              placeholder="นามสกุล"
              value={this.state.surname}
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
              ref='phone'
              autoFocus
              placeholder="เบอร์์โทรศัพท์"
              value={this.state.surname}
              onChange={this.onChangeTelephone} />
          </FormField>

          <FormField style={{ display: 'flex', flex: 1 }}>
            <Select
              multiple
              placeholder="ประเภทความพิการ"
              onChange={({ category }) => this.onChangeDefectiveType(category)}
              value={this.state.category}
              options={this.state.defectiveOptions} />

            {/* <Select
              size="medium"
              placeholder="ประเภทความพิการ"
              multiple
              closeOnChange={false}
              disabledKey="dis"
              labelKey="lab"
              valueKey="val"
              value={category}
              options={defectiveOptions}
              onChange={({ category: nextValue }) =>
                this.setState({ category: nextValue })
              }
              onClose={() => this.setState({ options: defectiveOptions })}
            /> */}
          </FormField>
        </Box>
      </Box>
    );
  }


  render() {
    const { passwordError } = this.state;

    return (
      <Box flex direction="column" background="light-1"
        align="center" justify="center" fill='vertical'>
        <Box pad='medium' style={{ maxWidth: 700 }}
          round={{ size: 'small' }} background="light-0"
          animation='fadeIn'>
          {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}

          <Text size="large" weight="bold">ลงทะเบียน</Text>
          <Tabs alignSelf="start" onActive={this.setActiveTab}>
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