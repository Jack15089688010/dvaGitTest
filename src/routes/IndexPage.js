import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({dispatch, products, dataList}) {
  console.log(products,"F盘2",'masterBranch');
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
  return {
    products: state.namespaceModel.products,
    dataList: state.namespaceModel.dataList
  }
}
export default connect(modelProps)(IndexPage);
