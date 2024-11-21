import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../addToDb';
import Product from '../../Product/Product';


const ListedProducts = () => {
    const allProducts = useLoaderData();

    const [readList,setReadList]= useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();

        const storedReadListInt =  storedReadList.map(id => parseInt(id));

        console.log(storedReadList,storedReadListInt, allProducts);

        const readProductList = allProducts.filter(product =>storedReadListInt.includes(product.product_id))

        setReadList(readProductList);


    },[])
    return (
        <div>
            <h3 className="text-3xl gap-8">Listed Products</h3>

         <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
           </TabList>

           <TabPanel>
                <h2>Any content:{readList.length}</h2>
                {
                    readList.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
         </Tabs>
        </div>
    );
};

export default ListedProducts;
