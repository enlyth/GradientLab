import React from 'react'
import { Link } from 'react-router-dom'
import { getSnapshot } from 'mobx-state-tree'
import {
  MdSave,
  MdHome,
  MdSettings,
  MdVisibility,
  MdVisibilityOff
  /* MdLock */
} from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { toast } from 'react-toastify'

const NavButtons = ({ store }) => {
  return (
    <div className="ui-toggler" style={{ display: 'inline-block' }}>
      <button
        className={store.uiHidden || store.uiHiddenLocked ? 'activeButton' : ''}
        onPointerUp={store.toggleUILock}
      >
        {store.uiHidden || store.uiHiddenLocked ? (
          <MdVisibilityOff />
        ) : (
          <MdVisibility />
        )}
      </button>
      <button
        onPointerUp={() => {
          try {
            window.localStorage.setItem(
              '__GRADIENTLAB_STORE__',
              JSON.stringify(getSnapshot(store))
            )
          } catch (err) {
            console.error(err)
          }

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
      <a href="https://github.com/enlyth/GradientLab" target="_blank">
        <button className="github-button">
          <GoMarkGithub />
        </button>
      </a>
    </div>
  )
}

export default NavButtons
