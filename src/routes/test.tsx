import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';

/*父组件*/
interface helloWorld  {
  dispatch: Dispatch<any>;
  products?:any
}
const HelloWorldPage: React.FC<helloWorld> = (props) => {
  console.log(props);

  return (
    <div>
    {props.test}
        HelloWorldPage
    </div>
  )
};

function mapProp(state:any) {
  return {
    products: state.namespaceModel.products,
    dataList: state.namespaceModel.dataList
  }
}
export default connect(mapProp)(HelloWorldPage);
