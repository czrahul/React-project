import "./datatable.css"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesrc";
import React, { Component } from 'react';
import Select from 'react-select';

const option = [
  { label: "Active", value: 355 },
  { label: "Inactive", value: 54 },

];
const Datatable = () => {
    return (
      <>
      <div className="users">
        Users
      </div>
      <div className="hostselect">
        <Select value={"Host Type"} options={option} onChange={(value) => this.setValues(value)} />
      </div>
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
      </>
    )
}

export default Datatable;