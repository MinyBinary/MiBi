export enum BreakPoint {
  DesktopTop = '1600px',
  DesktopLow = '1440px',
  LaptopTop = '1439px',
  LaptopLow = '1024px',
  TabletTop = '1023px',
  TabletLow = '768px',
  MobileTop = '767px',
}

export enum BreakPointsV2 {
  // Mobile (small)
  MobileSmall = '320px', // max-width: 320px
  // Mobile (medium)
  MobileMedium = '480px', // between 321px and 480px

  // Mobile (custom)
  MobileCustom = '620px', // between 481px and 620px

  // Mobile (large)
  MobileLarge = '767px', // between 621px and 767px

  // Tablet (portrait)
  TabletPortrait = '1024px', // between 768px and 1024px
  // Tablet (landscape)
  TabletLandscape = '1280px', // between 1025px and 1280px

  // Laptops
  Laptop13to15 = '1440px', // between 1281px and 1440px

  // Desktops
  DesktopLarge = '1920px', // between 1441px and 1920px
  // Extra large screen
  DesktopExtraLarge = '1921px', // min-width: 1921px
}
