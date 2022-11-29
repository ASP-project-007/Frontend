import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import axios from 'axios';

interface searchConfig {
  name: string,
  location: string
}

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler

export const addProductToCart =async (product:string) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/simple/addProductToCart',
      params: {
        name: product
      }
    })
    return res;
  } catch (error: any){
    console.log(error)
  }
}

export const SearchItems = async (searchItem: string) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/simple/search',
      params: {searchItem}
    })
  } catch (error: any){
    console.log(error)
  }
}

export const UpdateItems = async (categoreis) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/simple/getCategories',
      params: {
        categoreis
      },
    })
    return res;
  } catch (error: any){
    console.log(error)
  }
}

export const GetLocation = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: 'sample/getLocation',
    })
  } catch (error: any) {
    console.log(error)
  }
}

export const GetProductInfo = async(name: string) => {
  try {
    const res = await axios({
      method: 'get',
      url: 'sample/getProductInfo',
      params: {
        name: name,
      }
    })
  } catch(error: any) {
    console.log(error)
  }
}

export const GetCategories = async() => {
  try {
    const res = await axios({
      method: 'get',
      url: 'sample/getCategories', 
    })
  } catch (error: any) {
    console.log(error)
  }
}