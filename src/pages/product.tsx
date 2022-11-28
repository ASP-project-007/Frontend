import React from 'react';
import type { MenuProps } from 'antd';
import { Pagination, Breadcrumb, Input, Layout, Menu, Slider } from 'antd';
import { BellOutlined, EnvironmentOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { SearchItems, GetCategories, UpdateItems, GetLocation } from './api/users';
import testGoodList from './users/test.json';
import testcategories from './users/Categories.json';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

type StateType = {
  goodList: object,
  categories: object,
  location: string,
};
interface ProductPage {
  state: StateType;
}

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goodList: testGoodList,
      categories: testcategories,
      location: '',
    };
  }

  async componentDidMount () {
    let categories = await GetCategories();
    let goodList = await UpdateItems(1);
    const location = await GetLocation();
    this.setState({
      categories,
      goodList,
      location,
    })
  } 

  async changeCategories({key}) {
    const goodList = await UpdateItems(key);
    // once API work, use setState
    // this.setState({
    //   goodList: goodList,
    // });
  }

  async changePage(page: number, pageSize: number) {
    let goodList = await UpdateItems(page)
    // once API work, use setState
    // this.setState({goodList})
  }
  
  async onSearch (value: string) {
    let goodList = await SearchItems(value);
    // once API work, use setState
    // this.setState({goodList})
  }
  

  render (): React.ReactNode {
    // const { categories, location, goodList }  = this.state
    const menuItem: MenuProps['items'] = testcategories.categoriesList.map( // testcategories => categories
      (_, index, item) => {
        const key = String(index + 1);
        return {
          key: `sub${key}`,
          label: `${item[index].name}`,
    
          children: item[index].option.map((_, j, childrenItem) => {
            return {
              key: `${childrenItem[j].name}`,
              label: `${childrenItem[j].name}`,
              onTitleClick: ()=>this.changeCategories
            };
          }),
        };
      }
    );
    const style = {
      display: 'inline-block',
    };
    const TOTAL_PAGE = 50;

    return (
      <Layout style={{ height: '100%'}}>
        <Header style={{
          ...style,
          backgroundColor: 'white'
        }}>
        <div className='header-left'>
          <div className='logo' style={style}>
            <a href="/">OfferCart</a>
          </div>
          <div className='location' style={style}>
              <EnvironmentOutlined />{/*location*/}
          </div>
          <div className='search' style={{
              ...style,
              position: 'relative',
              height: '100%',
              width: 200,
          }}>
            <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{
                    padding: '8%',       
                }}
            />
          </div>
          <div className='header-right' style={{
            ...style,
            float: 'right'
          }}>
            <BellOutlined />
            <ShoppingCartOutlined />
            <UserOutlined />
          </div>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          itemRender={()=>{}}
        >
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/product">Categories</Breadcrumb.Item>
          <Breadcrumb.Item>Vegetables</Breadcrumb.Item>
          <Breadcrumb.Item>Chairs</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{
          height: "inherit"
          }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                background: '#F4F4F4'
              }}
              items={menuItem}
              onSelect={this.changeCategories}
            />
            <div className='Filters'>Filters
              <div className='color'></div>
              <div className='SaleOff'>Price
                  <Slider defaultValue={30} />
              </div>
            </div>
          </Sider>
          <Content
              style={{
                  padding: '0 24px',
                  minHeight: 280 ,
                  backgroundColor: 'white'
              }}>
              {testGoodList.goodlist.map((items) => {
                  return(
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '5px',
                        width: '30%',
                        height: '40%',
                        display: 'inline-block',
                      }}
                    >
                      <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${items.image})`,
                        backgroundSize: '100% 100%',
                      }} />
                      <h1>Name: {items.name}</h1>
                      <h1>Sale Off: {items.saleOff}</h1>
                      <h1>Shop: {items.shop}</h1>
                      <ShoppingCartOutlined />
                    </div>
                  )
              })}
              <Pagination
                defaultCurrent={1}
                total={TOTAL_PAGE}
                style={{
                  textAlign: 'center',
                }}
                onChange={this.changePage}
              />
          </Content>
        </Layout>
      </Content>
    </Layout>
    )
  }
}

export default ProductPage