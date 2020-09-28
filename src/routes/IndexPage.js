import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({dispatch, products, dataList}) {
  console.log(products,"D盘1");
  console.log(dataList);
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
    </div>
  );
}

IndexPage.propTypes = {
};
const modelProps = (state) => {
  console.log(state);
  return {
    products: state.namespaceModel.products,
    dataList: state.namespaceModel.dataList
  }
}
export default connect(modelProps)(IndexPage);
