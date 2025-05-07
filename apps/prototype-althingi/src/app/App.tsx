/* eslint-disable @nx/enforce-module-boundaries */
import { Route, Routes, Link } from 'react-router-dom'

import { globalStyles } from '@island.is/island-ui/core'

import LandingPage from '../pages/LandingPage'
import MembersPage from '../pages/MembersPage'
import MemberDetailPage from '../pages/MemberDetailPage'

import I18n from '@island.is/web/i18n/I18n'

import * as styles from './App.css'

globalStyles()

const App = () => {
  return (
    // Fake i18n context
    <I18n locale={'is'} translations={[]}>
      <div className={styles.container}>
        {/* <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/member/:id" element={<MemberDetailPage />} />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
        {/* END: routes */}
      </div>
    </I18n>
  )
}

export default App
