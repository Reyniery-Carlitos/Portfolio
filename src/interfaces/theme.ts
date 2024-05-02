export interface Theme {
  fontColor: string,
  bgColor: string,
  btnPrimary: string,
  btnPrimaryBorder: string,
  btnPrimaryFontColor: string,
  btnSecondary: string,
  btnSecondaryBorder: string,
  btnSecondaryFontColor: string,
  cardBgColor: string,
  tagBgColor: string,
  tagColor: string,
  footerBgColor: string,
  logoColor: string
}

export interface Themes {
  [key: string]: Theme
}
