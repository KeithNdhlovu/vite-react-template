export interface IUser {
  id: string
  phone_number: string
  email: string
  first_name: string
  last_name: string
  show_rate_ap: boolean
  communities: ICommunity[]
}

export interface IGeneric {
  id: string
  name: string
}

export interface IChannelMini extends IGeneric {
  can_create?: boolean
  can_publish?: boolean
}

export interface IChannel extends IGeneric {
  is_subscribed?: boolean
  can_subscribe?: boolean
  invite_only?: boolean
}

export interface IContactFormCategory extends IGeneric {
  order?: number
  description?: string
}

export interface IBlock {
  show: boolean
  body?: string
  title?: string
  action?: string
}

export type IResourceCategory = IGeneric

export interface ICommunity {
  id: string
  type: string
  name: string
  email: string
  phone_number: string
  website: string
  address: string
  image: string
  image_blurhash: string
  cover_image: string
  cover_image_blurhash: string
  channels: IChannelMini[]
  targetable_channels: IChannelMini[]
  contact_form_categories: IContactFormCategory[]
  contact_form_enabled: boolean
  feature_resources_enabled: boolean
  feature_calendar_enabled: boolean
  feature_gallery_enabled: boolean
  resource_categories: IResourceCategory[]
  image_sharing_downloading_enabled: boolean

  // Ads related LEGACY
  ads_enabled: boolean // This will fall away once all apps are using the more fine-grained attributes

  // Ads related
  ads_banners_enabled: boolean
  ads_sponsored_articles_enabled: boolean
  ads_sponsor_enabled: boolean
  ads_mobile_keywords: boolean
  ads_desktop_keywords: boolean
}
