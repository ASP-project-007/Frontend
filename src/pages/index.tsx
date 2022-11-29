import 'antd/dist/antd.css';
import { Menu, Button  } from 'antd'
import React from 'react';

export default class IndexPage extends React.Component {
  render (): React.ReactNode {
    return(
      <div title="Home">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item><a href="/">Home</a></Menu.Item>
          <Menu.Item><a href="/product">Product</a></Menu.Item>
          <Menu.Item><a href="/cart">Cart</a></Menu.Item>
        </Menu>
        <img src='https://images5.alphacoders.com/311/311171.jpg' />
        <Button
          type='primary'
          style={{
            zIndex: 1,
            bottom: 300,
            fontFamily: 'Open Sans Condensed, sans-serif'
          }}
          block
        >
          <a href="/product">welcome</a>
        </Button>
      </div>
    )
  }
}
