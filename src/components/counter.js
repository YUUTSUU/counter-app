import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './actions'
import './counter.css'

const Counter = ({state, inc, dec, res}) => {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="block">
          <h1 id="count" class="counter">{state}</h1>
        </div>
        <div class="button">
          <button id="inc" class="btn" onClick={inc}/>
          <button id="dec" class="btn" onClick={dec}/>
          <button id="res" class="btn" onClick={res}/>
        </div>
        <div class="download">
          <button id="dow" class="btn"/>
          <button id="up" class="btn"/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)