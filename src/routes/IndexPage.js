import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {ListHook} from './defineHook'

function IndexPage({dispatch, products, dataList}) {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    console.log('useEffect');
  },[])

  let countMemo = useMemo(() => {
    console.log('memo');
    return count
  },[count])

  let callBack = useCallback(() => {
    return count
  })




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
      <div>{callBack()}</div>
      <button onClick={() => {
        setCount( count + 1 )
      }}>setCount</button>
      <button onClick={() => {
        setPrice( price + 1 )
      }}>setPrice</button>
      <div>-----------</div>

      <ListHook />
    </div>
  );
}

IndexPage.propTypes = {
};
const modelProps = (state) => {
  console.log('444')
  return {
    products: state.namespaceModel.products,
    dataList: state.namespaceModel.dataList
  }
}
export default connect(modelProps)(IndexPage);
