export const Config = {
  language: 'ENG',
  currency: 'USD',
  country: 'USA',
}
export const Pages = {
  home: true,
  search: true,
  categories: true,
  collections: true,
  fonts: true,
  threeD: true, // includes 3D models
  accounts: true, // includes login, register, profile
  premium: true, // includes premium/pricing elements
  promotions: true, // includes ad spots, offers and discounts
}
export const DevConfig = {
  environment: 'development' || 'production' || 'staging' || 'test',
  style_debug_level: false, // false, 'basic', 'advanced'
  debug: false, // ? how can we do this? is it possible? is it useful?
  animations: true,
}
