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
      let promise = yield call(testAsync,payload)
      yield put({
        type: 'add',
        payload: promise
      })
    }
  }
}

 async  function testAsync(param){
    var promise = new Promise(( resolve, reject ) => {
      setTimeout(function () {
        resolve(param + 1000)
      }, 1000);
    })
    return promise
}
