import React, { Component } from 'react'
import { applySnapshot } from 'mobx-state-tree'
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
      if (snapShot) {
        if (store.router.location.pathname === '/') {
          snapShot.uiHidden = false
          snapShot.uiHiddenLocked = false
        } else {
          snapShot.uiHidden = true
          snapShot.uiHiddenLocked = true
        }
        applySnapshot(store, snapShot)
      }
    } catch (err) {
      console.error('Could not load application state from snapshot.')
    }
  }

  render() {

    // TODO: The following lines need to be removed
    //       but when done at the moment this stop the app from working
    //      probably because of observer

    const selected = store.selectedGradient
    const linearGradient = chroma
      .scale(selected.colors)
      .mode(selected.mode)
      .colors(selected.grades)
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
