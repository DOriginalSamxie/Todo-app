import React, { useState, useEffect } from 'react'
import data from './data'

import { Popconfirm, Table, Button, Space, Form, Input } from 'antd'
function DataTable() {
  const [feed, setFeed] = useState([data])
  const [loading, setLoading] = useState(false)
  const handleDelete = (value) => {
    // const data = [...data]
    // const filterdData = data.filter((item) => item.id !== value.id)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Due Date',
      dataIndex: 'due date',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      render: (_, record) =>
        data.length >= 1 ? (
          <Space>
            <Popconfirm
              title='Are you sure you want to delete ?'
              onConfirm={() => handleDelete(record)}
            >
              <Button danger type='primary'>
                Delete
              </Button>
            </Popconfirm>
            <Button type='primary'>Edit</Button>
          </Space>
        ) : null,
    },
  ]
  return (
    <div>
      <Table columns={columns} dataSource={data} bordered />
    </div>
  )
}

export default DataTable
