import React, { useState } from 'react';
import { Anchor, Avatar, Button, Card, Col, Divider, Empty, FloatButton, Form, Input, Layout, Menu, Modal, notification, Row, Space, Steps, Table, Tag, TimePicker, Typography } from 'antd';
import 'antd/dist/reset.css';
import './styles/dashboard.css';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {HiOutlineHome} from 'react-icons/hi'
import {GrAdd, GrOrganization} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineMoneyCollect} from 'react-icons/ai'
import {faker} from '@faker-js/faker'
import ButtonGroup from 'antd/es/button/button-group';
import dayjs from 'dayjs';

const { Link } = Anchor

const generateData = () => {
  const dat = [];

  for (let i = 0; i < 15; i++) {
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false
    })
  }

  return dat;
}

const data = generateData();

const App = () => {

  const [collpased, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout className="container">
    <Header style={{backgroundColor: 'white'}}>
      <div style={{display: "flex", alignItems: "center"}}>
        <RxHamburgerMenu 
          onClick={() => setCollapsed(!collpased)} 
          style={{marginRight: 20}} 
          size={30} 
        />
        <div className='brand'>
          Cool-Dashboard        
        </div>
      </div>
    </Header>
    <Layout>
      <Sider theme='light' collapsed={collpased}>
        <Menu
          mode='inline'
          items={[
            {
              label: "Home",
              key: "home",
              icon: <HiOutlineHome />,
              children:[
                {
                  label: "Add Profile",
                  key: "add_profile",
                  icon: <CgProfile />
                },
                {
                  label: "Add Users",
                  key: "add_users",
                  icon: <BsPerson />
                },

              ]
            },
            {
              label: "About us",
              key: "about_us",
              icon: <GrOrganization />
            },
            {
              label: "Home",
              key: "home",
              icon: <HiOutlineHome />
            },
          ]}
        >
        </Menu>
      </Sider>
      <Content className='content' style={{padding: 20}}>
        <Space direction='horizontal'>
          <Card>
            <Space direction='horizontal'>
              <AiOutlineMoneyCollect />
              <small>Total Sales</small>
            </Space>
            <Typography.Title>$100</Typography.Title>
          </Card>
          <Card>
            <Space direction='horizontal'>
              <AiOutlineMoneyCollect />
              <small>Total Sales</small>
            </Space>
            <Typography.Title>$200</Typography.Title>
          </Card>
          <Card>
            <Space direction='horizontal'>
              <AiOutlineMoneyCollect />
              <small>Total Sales</small>
            </Space>
            <Typography.Title>$300</Typography.Title>
          </Card>
        </Space>
        <Divider />
        <Card>
          <FloatButton icon={<GrAdd/>} />
          <Button onClick={() => {
            notification.success({
              message: "ABCDEF"
            })
          }}>
            Show notification
          </Button>
          <Button onClick={() => setModalOpen(true)}>
            Add User
          </Button>
          <Button 
            danger 
            type='primary' 
            onClick={() => {
              Modal.confirm({
                title: "Do you want to delete this?",
                content: "When clicked OK button, this dialog will be closed after 1 second"
              })
            }}
          >
            Delete
          </Button>
        </Card>
        <Card>
          <Empty/>
          <Avatar 
            src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"} 
            size="large"
          />
        </Card>
        <Card>
          <Form 
            onFinish={(values) => {
              console.log(values);
            }} 
            layout='vertical'
          >
            <Form.Item name={"name"} label={"Name"}>
              <Input/>
            </Form.Item>
            <Form.Item name={"email"} label={"Email"}>
              <Input type='email' />
            </Form.Item>
            <Form.Item name={"password"} label={"Password"}>
              <Input type='password' />
            </Form.Item>
            <Form.Item name={"time"} label={"Pick some time"}>
              <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
              {/* <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
              <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" /> */}
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type='primary'>
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Steps
            current={1}
            items={[
              {
                title: "Sign up",
                description: "ABC"
              },
              {
                title: "Validate",
                description: "DEF"
              },
              {
                title: "Sign in",
                description: "GHI"
              }
            ]}
          />
        </Card>
        <Row gutter={10}>
          <Col span={6}>
            <Card>
              <Typography.Title>Data 1</Typography.Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Typography.Title>Data 2</Typography.Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Typography.Title>Data 3</Typography.Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Typography.Title>Data 4</Typography.Title>
            </Card>
          </Col>
        </Row>
        <Row gutter={10} style={{marginTop: 10}}>
          <Col span={24}>
            <Table 
              dataSource={data} 
              columns={[
                {
                  dataIndex: "id",
                  title: "ID",
                  key: "id",
                  fixed: true
                },
                {
                  dataIndex: "name",
                  title: "Name",
                  key: "name",
                },
                {
                  dataIndex: "email",
                  title: "Email",
                  key: "email",
                },
                {
                  dataIndex: "status",
                  title: "Status",
                  render: (val) => val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>
                },
                {
                  title: "Actions",
                  render: () => (
                    <ButtonGroup>
                      <Button>Edit</Button>
                      <Button type='primary' danger>Delete</Button>
                    </ButtonGroup>
                  )
                }
              ]}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
    <Modal open={modalOpen} onCancel={() => setModalOpen(false)} title={"Add a new user"}>
      <Form>
        <Form.Item label={"Name"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Email"}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  </Layout>
  )
}
  
export default App;