import React, { Component } from 'react'

import { Box, Select, FormField } from 'grommet';

import {
    companyOptions,
    departmentOptions,
    provinceOptions
} from './mockup'


export default class index extends Component {

    state = {
        companyFilter: '',
        provinceFilter: '',
        departmentFilter: '',
    }

    onChangeCompanyFilter = (value) => {
        this.setState({ companyFilter: value });
        this.props.onSelectCompanyFilter(value);

    }
    onChangeProvinceFilter = (event) => {
        this.setState({ provinceFilter: event.target.value });

    }
    onChangeDepartmentFilter = (event) => {
        this.setState({ departmentFilter: event.target.value });
    }

    render() {
        return (
            <Box direction="row"
                round={{ size: 'small' }}
                gap="medium" >
                <Box pad="xsmall" background="light-0"
                    round={{ size: 'small' }}
                    style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="บริษัท"
                        onChange={({ value: nextValue }) => this.onChangeCompanyFilter(nextValue)}
                        value={this.state.companyFilter}
                        options={companyOptions} />
                </Box>
                <Box pad="xsmall" background="light-0"
                    round={{ size: 'small' }}
                    style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="จังหวัด"
                        onChange={(defectiveType) => this.onChangeProvinceFilter(defectiveType)}
                        value={this.state.provinceFilter}
                        options={provinceOptions} />
                </Box>
                <Box pad="xsmall" background="light-0"
                    round={{ size: 'small' }}
                    style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="หน่วยงาน"
                        onChange={(defectiveType) => this.onChangeDepartmentFilter(defectiveType)}
                        value={this.state.departmentFilter}
                        options={departmentOptions} />
                </Box>
            </Box>
        )
    }
}
