module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // brand: '#0fa9e6',
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8",
        // 我们可以使用对象语法定义
        brand: {
          light: '#3fbaeb',
          dark: '#0c87b8',
          DEFAULT: '#0fa9e6'
        }
      },
      fontFamily: {
        // 我们把 poppins 的字体命名为 headline，之后我们可以通过 font-headline 使用 
        headline: 'Poppins, sans-serif'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover']
    }
  },
  plugins: []
}
