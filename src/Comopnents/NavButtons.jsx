import React from 'react'
import { Link } from 'react-router-dom'
import { getSnapshot } from 'mobx-state-tree'
import {
  MdSave,
  MdHome,
  MdSettings,
  MdVisibility,
  MdVisibilityOff,
  MdLock
} from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { toast } from 'react-toastify'

const NavButtons = ({ store }) => {
  return (
    <div className="ui-toggler" style={{ display: 'inline-block' }}>
      <button
        className={store.uiHidden || store.uiHiddenLocked ? 'activeButton' : ''}
        onPointerLeave={store.showUI}
        onPointerEnter={store.hideUI}
      >
        {store.uiHidden || store.uiHiddenLocked ? (
          <MdVisibilityOff />
        ) : (
          <MdVisibility />
        )}
        <button onPointerUp={store.toggleUILock} className="uiLock">
          <MdLock />
        </button>
      </button>
      <button
        onPointerUp={() => {
          console.lo
          window.localStorage.setItem(
            '__GRADIENTLAB_STORE__',
            JSON.stringify(getSnapshot(store))
          )
          toast('Successfully saved.', {
            position: 'bottom-right'
          })
        }}
      >
        <MdSave />
      </button>
      <Link to="/settings">
        <button onPointerUp={() => store.lockUIHidden()}>
          <MdSettings />
        </button>
      </Link>
      <Link to="/">
        <button onPointerUp={() => store.unlockUIHidden()}>
          <MdHome />
        </button>
      </Link>
      <button
        onPointerUp={() => window.open('https://github.com/enlyth/GradientLab')}
        className="github-button"
      >
        <GoMarkGithub />
      </button>
    </div>
  )
}

export default NavButtons
