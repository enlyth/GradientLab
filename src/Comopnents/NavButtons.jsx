import React from 'react'
import { Link } from 'react-router-dom'
import { getSnapshot } from 'mobx-state-tree'
import {
  MdSave,
  MdHome,
  MdSettings,
  MdVisibility,
  MdVisibilityOff
} from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { toast } from 'react-toastify'

const NavButtons = ({ store }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <button
        className={store.uiHiddenLocked ? 'activeButton' : ''}
        onPointerLeave={
          store.router.location.pathname !== '/settings' && store.showUI
        }
        onPointerEnter={
          store.router.location.pathname !== '/settings' ? () => {} : store.hideUI
        }
        onPointerUp={
          store.router.location.pathname !== '/settings' ? () => {} : store.toggleUILock
        }
      >
        {store.uiHidden || store.uiHiddenLocked ? (
          <MdVisibilityOff />
        ) : (
          <MdVisibility />
        )}
      </button>
      <button
        onPointerUp={() => {
          console.lo
          window.localStorage.setItem('__GRADIENTLAB_STORE__', JSON.stringify(getSnapshot(store)))
          toast('Successfully saved.', {
            position: 'bottom-right'
          })
        }}
      >
        <MdSave />
      </button>
      <Link onPointerUp={() => store.lockUIHidden()} to="/settings">
        <button>
          <MdSettings />
        </button>
      </Link>
      <Link onPointerUp={() => store.unlockUIHidden()} to="/">
        <button>
          <MdHome />
        </button>
      </Link>
      <button className="github-button">
        <GoMarkGithub />
      </button>
    </div>
  )
}

export default NavButtons
