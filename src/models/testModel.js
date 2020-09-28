export default {
  namespace: 'namespaceModel',
  state: {
    products: [ 'jack' ],
    dataList: [ 'hhhh' ]
  },
  reducers: {
    'add'(state, { payload }){
      state.products.push(payload)
      return {
        ...state,
        products:[].concat(state.products)
      }
    }
  },
  effects:{
    *addAsync({ payload }, { call, put }){
      let newdata = yield call(testAsync,payload)
      yield put({
        type: 'add',
        payload: newdata
      })
    }
  }
}

async function testAsync(param){
  debugger
  let data = await setTimeout(function () {
    return param + 1
  }, 1000);
  return data
}
