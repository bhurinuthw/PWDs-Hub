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

    }
    onChangeProvinceFilter = (value) => {
        this.setState({ provinceFilter: value });

    }
    onChangeDepartmentFilter = (value) => {
        this.setState({ departmentFilter: value });
    }

    render() {
        return (
            <Box direction="row" gap="medium">
                <FormField style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="บริษัท"
                        onChange={({ defectiveType }) => this.onChangeCompanyFilter(defectiveType)}
                        value={this.state.companyFilter}
                        options={companyOptions} />
                </FormField>
                <FormField style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="จังหวัด"
                        onChange={({ defectiveType }) => this.onChangeProvinceFilter(defectiveType)}
                        value={this.state.provinceFilter}
                        options={provinceOptions} />
                </FormField>
                <FormField style={{ display: 'flex', flex: 1 }}>
                    <Select
                        placeholder="หน่วยงาน"
                        onChange={({ defectiveType }) => this.onChangeDepartmentFilter(defectiveType)}
                        value={this.state.departmentFilter}
                        options={departmentOptions} />
                </FormField>
            </Box>
        )
    }
}
