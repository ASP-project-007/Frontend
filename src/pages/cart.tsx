import React, { ReactNode, useState } from "react";
import { Breadcrumb, Layout, Menu, Image, Rate, Descriptions, Radio, Statistic, Button, Drawer } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { GetProductInfo, addProductToCart } from './api/users';
import testProductInfo from './users/ProductInfo.json';
import ProductList from './users/ProductList.json';


const { Header, Content, Footer } = Layout;
const style = {
    display: 'inline-block',
    width: '50%',
    height: 'auto',
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
    productCart() {
        const productList = this.state;
        return(
            productList.map((_, index, item) => {
                <div>
                    <Image src={item.image}/>
                    <div className="description">
                        Name:{item.name}
                        Amount:{item.amount}
                        Price:{item.price}
                    </div>
                </div>
            })
        )
    }
    async addProduct() {
        const {productInfo} = this.state;
        const productList = await addProductToCart(productInfo.name);
        this.setState({
            drawOpen: true,
            productList
        })
    }
    render (): ReactNode {
        const {productInfo, drawOpen} = this.state;

        return(
            <Layout style={{ height: '100%'}}>
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
                    <div className="site-layout-background">
                        <div
                            className="productPhoto"
                            style={style}
                        >
                            <Image
                                width={200}
                                src={productInfo.image}
                            />
                        </div>
                        <div
                            className="productDetail"
                            style={style}
                        >
                            ProductName:{productInfo.name}<br/>
                            Rate: <Rate disabled defaultValue={productInfo.rate} /><br/>
                            size<br/>
                            <Radio.Group onChange={(value)=>{ this.setState({value})}}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </Radio.Group><br/>
                            colors<br/>
                            <Radio.Group onChange={(value)=>{ this.setState({value})}}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </Radio.Group><br/>
                            <Button type="primary" onClick={()=>this.addProduct()}>
                                Check Out
                            </Button>
                            <Drawer title="Product Cart" placement="right" onClose={()=>{this.setState({drawOpen: false})}} open={drawOpen}>
                                {()=>this.productCart()}
                            </Drawer>
                        </div>
                        <Descriptions title="Product Info">
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
                                <Statistic value={productInfo.like} prefix={<LikeOutlined />} />
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </Content>
            </Layout>
        )
    }
}