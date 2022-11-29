import 'antd/dist/antd.css';
import { Menu, Button  } from 'antd'
import React from 'react';

const style = {
  fontSize: '15px',
  color: 'rgb(230,230,230,0.9)'
}

export default class IndexPage extends React.Component {
  render (): React.ReactNode {
    return(
      <div
        title="Home"
        style={{
          backgroundImage: 'url(https://images5.alphacoders.com/311/311171.jpg)',
          width: "100%",
          height: "100%",
          position: 'absolute',
        }}
      >
        <Menu
          style={{
            backgroundColor: 'rgba(200,200,200,0.4)',
            border: 0,
            color: '#FF0000',
          }}
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item><a href="/" style={style}>Home</a></Menu.Item>
          <Menu.Item><a href="/product" style={style}>Product</a></Menu.Item>
          <Menu.Item><a href="/cart" style={style}>Cart</a></Menu.Item>
        </Menu>
        <Button
          type='primary'
          style={{
            width:'100%',
            height: '10%',
            top: '50%',
            border: 0,
            fontFamily: 'Open Sans Condensed, sans-serif',
            backgroundColor: 'rgba(200,200,200,0.4)'
          }}
          block
        >
          <a href="/product" style={{
            fontSize: '30px',
            fontWeight: 'bold',
            fontFamily: "Gill Sans"
          }}>welcome</a>
        </Button>
      </div>
    )
  }
}
