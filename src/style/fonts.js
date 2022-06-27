//FONTS
const outfit = {
  bold: {
    tft: new URL('../fonts/OutfitThin-Bold.woff', import.meta.url),
    woff: new URL('../fonts/OutfitThin-Bold.woff', import.meta.url),
    woff2: new URL('../fonts/OutfitThin-Bold.woff2', import.meta.url),
  },
  regular: {
    tft: new URL('../fonts/OutfitThin-Regular.woff', import.meta.url),
    woff: new URL('../fonts/OutfitThin-Regular.woff', import.meta.url),
    woff2: new URL('../fonts/OutfitThin-Regular.woff2', import.meta.url),
  },
};

export default `
 
@font-face {
    font-family: 'Outfit';
    src: url(${outfit.bold.woff2}) format('woff2'),
        url(${outfit.bold.woff}) format('woff'),
        url(${outfit.bold.tft}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Outfit';
    src: url(${outfit.regular.woff2}) format('woff2'),
        url(${outfit.regular.woff}) format('woff'),
        url(${outfit.regular.tft}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}



`;
