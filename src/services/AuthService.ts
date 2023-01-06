import { UserManager } from 'oidc-client'

import Config from '@relay/helpers/Config'

class AuthService {
  userManager: UserManager

  ssoBaseUrl: string

  userStoreKey: string

  constructor() {
    const settings = {
      scope: Config.sso.authScope,
      authority: Config.sso.authUrl,
      client_id: Config.sso.clientId,
      response_type: Config.sso.responseType,
      post_logout_redirect_uri: `${Config.sso.clientRoot}/signout-callback-oidc`,
      redirect_uri: `${Config.sso.clientRoot}/signin-callback.html`,
      silent_redirect_uri: `${Config.sso.clientRoot}/silent-renew.html`,
      automaticSilentRenew: true,
      checkSessionInterval: 1000,
      silentRequestTimeout: 10000,
    }

    this.userManager = new UserManager(settings)
    this.ssoBaseUrl = Config.sso.authUrl

    /**
     * We need to get the authenticated session in a synchronous manner, for a more fluid flow.
     * So we borrowed this functionality from OIDC UserManager
     *
     * @see {@link UserManager:L612}
     */
    this.userStoreKey = `oidc.user:${settings.authority}:${settings.client_id}`
  }

  getManager = () => this.userManager

  getUser = () => this.userManager.getUser()

  login = () => this.userManager.signinRedirect()

  renewToken = () => this.userManager.signinSilent()

  logout = () => this.userManager.signoutRedirect()

  completeLogout = () => {
    this.userManager
      .signoutRedirectCallback()
      .then(() => {
        this.userManager.removeUser()
        this.userManager.clearStaleState()
      })
      .catch(() => {})
  }
}

const authService = new AuthService()

export default authService
