import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import Config from '@relay/helpers/Config'
import { login, logout } from '@relay/redux/authSlice'
import { useLazyGetBlockQuery, useLazyGetProfileQuery } from '@relay/services/profile'

function Home() {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const [getBlock, blockResult] = useLazyGetBlockQuery()
  const [getProfile, profileResult] = useLazyGetProfileQuery()

  useEffect(() => {
    // Set the default language
    i18n.changeLanguage('en')

    // Get the token
  }, [dispatch, i18n])

  const handleGetProfile = async () => {
    await getProfile({
      app_id: Config.appId,
    })
  }

  const handleGetBlock = async () => {
    await getBlock({
      app_id: Config.appId,
      version: Config.version,
    })
  }

  return (
    <div className='px-5'>
      <h1>Hello World</h1>
      <br />
      <h1>Env: {Config.env}</h1>
      <h1>App ID: {Config.appId}</h1>

      <button className='btn' type='button' onClick={handleGetProfile}>
        {profileResult.isLoading ? 'Loading' : t('home.button.get-profile')}
      </button>
      <button className='btn' type='button' onClick={handleGetBlock}>
        {blockResult.isLoading ? 'Loading' : 'Get Block'}
      </button>

      <button className='btn' type='button' onClick={() => dispatch(login())}>
        Login
      </button>
      <button className='btn' type='button' onClick={() => dispatch(logout())}>
        Logout
      </button>

      <div className='mt-5 grid grid-cols-2 gap-3'>
        <pre className='bg-slate-100 p-5'>
          {blockResult.isSuccess && JSON.stringify(blockResult.data, undefined, 2)}
        </pre>
        <pre className='bg-slate-100 p-5'>
          {profileResult.isSuccess && JSON.stringify(profileResult.data, undefined, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Home
