import React, { Component, PureComponent } from 'react'

import {
  Box, FormField, TextInput,
  Button, Image, Tab, Tabs, Text, CheckBox,
  Select,
} from 'grommet';
import { UserNew, Checkmark } from 'grommet-icons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Spinner from 'react-spinkit';
import { colors } from 'theme';
import axios from 'axios';

import { globalConstants } from '_constants'


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
      isLoading: false,

      n_id: '1111111222',
      prefix: 'นาย',
      name: 'พัทธ์',
      surname: 'ทวีผลเจริญ',
      phone: '0982235567',
      email: 'overtone00445@gmail.com',
      password: 'ot00445',
      confirmPass: 'ot00445',
      passwordError: null,

      roles: ['pwd', 'department', 'company'],
      role: 'pwd',
      category: [],
      defectiveOptions: [
        "การมองเห็น",
        "การได้ยิ้น",
        "การเคลื่อนไหว",
        "จิตใจ",
        "สติปัญญา",
        "การเรียนรู้",
        "ออทิสติก"
      ],

      companyName: 'บริษัท 1',
      companyRegion: 'ภาคกลาง',
      province: 'กรุงเทพ',

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

  onChangeCompanyName = (e) => {
    this.setState({ companyName: e.target.value });

  }

  onChangeCompanyRegion = (e) => {
    this.setState({ companyRegion: e.target.value });

  }

  onChangeCompanyProvince = (e) => {
    this.setState({ province: e.target.value });
  }


  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onChangeConfirmPass = (e) => {
    this.setState({ confirmPass: e.target.value });

    //test/base/iceyo
    // this.props.history.push('/iceyo')
  }

  onChangeDefectiveType = (selectedOption) => {
    this.setState({ category: selectedOption });
  }

  setActiveTab = (index) => {
    const role = this.state.roles[index];
    this.setState({ role: role });
  }


  onRegister = () => {
    const { n_id, prefix, name,
      surname, phone, email, password,
      confirmPass, category, role } = this.state;

    if (password !== confirmPass) {
      this.setState({ passwordError: 'Password must be the same' });
      return;
    }

    const userData = {
      n_id, prefix, name, surname, phone, email, password,
      category, role
    }

    this.setState({ passwordError: null, isLoading: true });

    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }

    axios.post(globalConstants.DOMAIN_NAME + "register", {
      ...userData
    }, config).then(
      (res) => {
        this.setState({ isLoading: false });
      }).catch(err => {
        console.error(err);
        this.setState({ isLoading: false });
      });
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
              value={this.state.phone}
              onChange={this.onChangeTelephone} />
          </FormField>

          <FormField style={{ display: 'flex', flex: 1 }}>
            <Select
              size="medium"
              placeholder="ประเภทความพิการ"
              multiple
              value={this.state.category}
              options={this.state.defectiveOptions}
              closeOnChange={false}
              onChange={({ value: nextValue }) =>
                this.setState({ category: nextValue })
              }
              onClose={() => this.setState({ options: defectiveOptions })}
            />
          </FormField>
        </Box>
      </Box>
    );
  }

  renderTab23Content = () => {
    return (
      <Box gap="small">
        <FormField >
          <TextInput
            ref='companyName'
            autoFocus
            placeholder="ชื่อบริษัท"
            value={this.state.companyName}
            onChange={this.onChangeCompanyName} />
        </FormField>

        <Box direction="row" gap="small">
          <FormField >
            <TextInput
              ref='companyRegion'
              autoFocus
              placeholder="ภาค"
              value={this.state.companyRegion}
              onChange={this.onChangeCompanyRegion} />
          </FormField>
          <FormField >
            <TextInput
              ref='province'
              autoFocus
              placeholder="จังหวัด"
              value={this.state.province}
              onChange={this.onChangeCompanyProvince} />
          </FormField>
        </Box>

        <FormField >
          <TextInput
            ref='email'
            autoFocus
            placeholder="email"
            value={this.state.email}
            onChange={this.onChangeEmail} />
        </FormField>

      </Box >
    );
  }

  renderRegisterButton = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Spinner
        fadeIn="quarter"
        name="line-scale" color={colors.brand} />
    }
    return (
      <Button primary
        icon={<Checkmark />}
        label="ยืนยัน" onClick={this.onRegister} />)
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
              {this.renderTab23Content()}
            </Tab>
            <Tab title="บริษัท">
              {this.renderTab23Content()}
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
            {this.renderRegisterButton()}
          </Box>


        </Box>
      </Box >
    )
  }
}

export default withRouter(connect(null, null)(Register));