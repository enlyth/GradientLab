import React, { Component } from 'react'
import { onSnapshot, applySnapshot } from 'mobx-state-tree'
import chroma from 'chroma-js'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import Header from './Comopnents/Header'
import Controls from './Comopnents/Controls'
import Main from './Pages/Main'
import { RouterModel, syncHistoryWithStore } from 'mst-react-router'
import Settings from './Pages/Settings'
import { observer } from 'mobx-react'
import Store from './Models/Store'
import defaultStore from './defaultStore'
import createBrowserHistory from 'history/createBrowserHistory'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const routerModel = RouterModel.create()
const history = syncHistoryWithStore(createBrowserHistory(), routerModel)
const store = Store.create({ ...defaultStore, router: routerModel })


class App extends Component {
  componentDidMount = () => {
    let snapShot
    try {
      snapShot = JSON.parse(
        window.localStorage.getItem('__GRADIENTLAB_STORE__')
      )
    } catch (err) {
      console.error('Could not load application state from snapshot.')
    }

    if (snapShot) {
      snapShot.uiHidden = false
      snapShot.uiHiddenLocked = false
      store.router.push('/')
      applySnapshot(store, snapShot)
    }
  }

  // handleMouseMove = e => {
  //   this.setState({ mousePosition: { x: e.screenX, y: e.screenY } })
  // }

  render() {
    // const { location, push, goBack } = this.props.store.router
    const selected = store.selectedGradient
    const linearGradient = chroma
      .scale(selected.colors)
      .mode(selected.mode)
      .colors(selected.grades)

    const backgroundStyle = {
      background: `linear-gradient(${
        selected.degrees.length === 0 ? '160' : selected.degrees
      }deg,${linearGradient.toString()})`,
      width: '100%'
    }

    const visibility =
      store.uiHidden || store.uiHiddenLocked ? 'hidden' : 'visible'

    return (
      <Router history={history}>
        <div className="App" comment={'onMouseMove={this.handleMouseMove}'}>
          <Header store={store} />
          <div className="container-controls">
            <Controls store={store} />
          </div>

          <Route path="/settings" render={() => <Settings store={store} />} />
          <Route exact path="/" render={() => <Main store={store} />} />
          <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
        </div>

      </Router>
    )
  }
}
export default observer(App)
