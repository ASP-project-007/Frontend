import React, { ReactNode, useState } from "react";
import { Breadcrumb, Layout, Menu, Image, Rate, Descriptions, Radio, Statistic, Button, Drawer } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { GetProductInfo, addProductToCart } from './api/users';
import testProductInfo from './users/ProductInfo.json';
import ProductList from './users/ProductList.json';
import { BellOutlined, EnvironmentOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { List } from "reselect/es/types";


const { Header, Content, Footer } = Layout;
const style = {
    display: 'inline-block',
    width: '50%',
    height: 'auto',
    verticalAlign: 'top'
}

export default class CartPage extends React.Component {
    constructor(){
        super();
        this.state = {
            productInfo: {},
            drawOpen: false,
            productList: [],
            size: 0,
            color: 0,
        }
    }
    
    componentDidMount (): void {
        const productName = '';
        // const res = GetProductInfo(productName);
        const res = testProductInfo; // test
        this.setState({
            productInfo: res,
        })
    }
    productCart(productList: []) {
        ProductList.productList.map((_, index, item) => {
            return(
                <div>
                    <Image src={item[index].image}/>
                    <div className="description">
                        <p>Name:{item[index].name}</p>
                        <p>Amount:{item[index].account}</p>
                        <p>Price:{item[index].price}</p>
                    </div>
                </div>
            )
        })
    }
    async addProduct() {
        const {productInfo} = this.state;
        // const productList = await addProductToCart(productInfo.name);
        const productList = ProductList;
        this.setState({
            drawOpen: true,
            productList
        })
    }
    render (): ReactNode {
        const {productInfo, drawOpen, productList} = this.state;
        return(
            <Layout
                style={{
                    height: '100%',
                    backgroundColor: 'white'    
                }}
            >
                <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item><a href="/">Home</a></Menu.Item>
                    <Menu.Item><a href="/product">Product</a></Menu.Item>
                    <Menu.Item><a href="/cart">Cart</a></Menu.Item>
                </Menu>
                </Header>
                <Content>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><a href="/">Home</a>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="/product">Product</a></Breadcrumb.Item>
                        <Breadcrumb.Item>Cart</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            marginLeft:'5%',
                            marginRight: '5%',
                        }}
                    >
                        <div
                            className="productPhoto"
                            style={{
                                ...style,
                                textAlign: 'right',
                                paddingRight: 20,     
                            }}
                        >
                            <Image
                                width={200}
                                src={productInfo.image}
                            />
                        </div>
                        <div
                            className="productDetail"
                            style={{
                                ...style,
                                paddingLeft: 20,
                            }}
                        >
                            <p style={{
                                fontFamily: 'Arial',
                                fontSize: '22px',
                                fontWeight: 'bold',
                                }}
                            >ProductName: {productInfo.name}</p>
                            <h1 style={{ fontSize: '12px'}}>Rate: </h1>
                            <Rate disabled defaultValue={5} />  
                            <h1 style={{ fontSize: '12px'}}>Size: </h1>
                            <Radio.Group onChange={(value)=>{ this.setState({value})}}>
                                <Radio value={1}>S</Radio>
                                <Radio value={2}>M</Radio>
                                <Radio value={3}>L</Radio>
                                <Radio value={4}>XL</Radio>
                            </Radio.Group><br/>
                            colors<br/>
                            <Radio.Group onChange={(value)=>{ this.setState({value})}}>
                                <Radio value={1} style={{ color: 'red' }}>red</Radio>
                                <Radio value={2} style={{ color: 'yellow' }}>yellow</Radio>
                                <Radio value={3} style={{ color: 'blue' }}>blue</Radio>
                                <Radio value={4} style={{ color: 'green' }}>green</Radio>
                            </Radio.Group><br/>
                            <Button
                                ghost
                                style={{
                                    border: 0,
                                    color: 'black',
                                    marginTop: '20px'
                                }} 
                                type="primary"
                                onClick={()=>this.addProduct()}
                            >
                                <ShoppingCartOutlined />Check Out
                            </Button>
                            <Drawer title="Product Cart" placement="right" onClose={()=>{this.setState({drawOpen: false})}} open={drawOpen}>
                                <>{(productList)=>this.productCart(productList)}</>
                            </Drawer>
                        </div>
                    </div>
                    <Descriptions
                            title="Product Info"
                            style={{
                                marginTop: '20px',
                                paddingTop: '2%',
                                paddingLeft: '5%',
                                paddingRight: '5%',
                                backgroundColor: 'rgb(245,245,245)',
                            }}
                            labelStyle={{
                                fontWeight: 'bold'
                            }}
                            column={4}
                        >
                            <Descriptions.Item label="Product Name">{productInfo.name}</Descriptions.Item>
                            <Descriptions.Item label="SaleOff">{productInfo.saleoff}</Descriptions.Item>
                            <Descriptions.Item label="Shop">{productInfo.shop}</Descriptions.Item>
                            <Descriptions.Item label="Rate">
                                <Rate disabled defaultValue={productInfo.rate} />
                            </Descriptions.Item>
                            <Descriptions.Item label="Description">
                                {productInfo.description}
                            </Descriptions.Item>
                            <Descriptions.Item label="Like">
                                <Statistic value={productInfo.like} prefix={<LikeOutlined />} valueStyle={{paddingBottom: 100}}/>
                            </Descriptions.Item>
                        </Descriptions>
                </Content>
            </Layout>
        )
    }
}