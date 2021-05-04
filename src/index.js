import {createStore} from 'redux'

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'RES':
      return 0
    default:
      return state
  }
}

const store = createStore(reducer) //1

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const res = () => ({type: 'RES'})

document.getElementById('inc').addEventListener('click', () => { //id
  store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => { //id
  store.dispatch(dec())
})

document.getElementById('res').addEventListener('click', () => { //id
  store.dispatch(res())
})

const update = () => {
  document.getElementById('count').textContent = store.getState() //id
}

store.subscribe(update) //2
