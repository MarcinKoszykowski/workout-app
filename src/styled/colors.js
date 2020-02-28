const purple = 'hsl(300, 100%, 20%)';
const black = 'hsl(0, 0%, 0%)';
const white = 'hsl(0, 0%, 100%)';
const red = 'hsl(0, 100%, 40%)';
const lightRed = 'hsl(0, 100%, 60%)';
const pink = 'hsl(0, 100%, 80%)';
const blue = 'hsl(200, 100%, 50%)';
const darkBlue = 'hsl(200, 100%, 30%)';
const lightGrey = 'hsl(205, 25%, 95%)'

const colorWithOpacity = (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`;

export { black, white, purple, red, lightRed, pink, blue, darkBlue, lightGrey, colorWithOpacity };
