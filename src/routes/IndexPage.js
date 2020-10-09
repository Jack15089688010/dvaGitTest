import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({dispatch, products, dataList}) {
  console.log(products,"F盘",'test');
  return (
    <div className={styles.normal}>
      {
        products.map((item,index) => {
          return(
            <div key={index}>
            {item}
            </div>
          )
        })
      }
      <button onClick={() => {
        dispatch({
          type:'namespaceModel/addAsync',
          payload: 999
        })
      }}>dispatch</button>
      <div>{count}</div>
      <button onClick={() => {
        setCount( count + 1 )
      }}>setCount</button>
    </div>
  );
}

IndexPage.propTypes = {
};
const modelProps = (state) => {
  return {
    products: state.namespaceModel.products,
    dataList: state.namespaceModel.dataList
  }
}
export default connect(modelProps)(IndexPage);
