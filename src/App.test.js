import { shallow, mount, render, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Store from './Models/Store'
import defaultStore from './defaultStore'
import { RouterModel } from 'mst-react-router'

import DegreeInput from './Components/DegreeInput'
import GradientSelection from './Components/GradientSelection'
import SavedGradient from './Components/SavedGradient'
import NavButtons from './Components/NavButtons'
import Header from './Components/Header'
import ColorCube from './Components/ColorCube'

const routerModel = RouterModel.create()
// const history = syncHistoryWithStore(createBrowserHistory(), routerModel)
const store = Store.create({ ...defaultStore, router: routerModel })
configure({ adapter: new Adapter() })

describe('Degree Input', () => {
  const wrapper = shallow(<DegreeInput store={store} />)
  it('contains an number input form for degrees', () => {
    expect(wrapper.find('input').length).toBe(1)
  })
  it('the input form takes numbers', () => {
    expect(wrapper.find('input').prop('type')).toBe('number')
  })
})

describe('GradientSelection', () => {
  const wrapper = shallow(<GradientSelection store={store} />)
  it('renders the same number of <SavedGradient/>s as store', () => {
    expect(wrapper.find(SavedGradient).length).toBe(store.gradients.length)
  })
  it('contains two buttons to add or remove gradient', () => {
    expect(wrapper.find('button').length).toBe(2)
  })
  it('exactly one gradient is selected', () => {
    expect(wrapper.findWhere(e => e.prop('isSelected')).length).toBe(1)
  })
})

describe('Header', () => {
  const wrapper = shallow(<Header store={store} />)
  it('contains logo', () => {
    expect(wrapper.find('.App-logo').length).toBe(1)
  })
  it('contains nav buttons', () => {
    expect(wrapper.find(NavButtons).length).toBe(1)
  })
})

describe('ColorCube', () => {
  const wrapper = shallow(<ColorCube color='red' />)
  it('receives background color via props.color', () => {
    expect(wrapper.props().style.backgroundColor).toBe('red')
  })
})