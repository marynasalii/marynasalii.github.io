module.exports = {
  theme: {
    extend:{
        colors: {
        'white': '#ffffff',
        'black': '#000000',

        'purple-300': '#51279B',
        'purple-200': '#653CAD',
        'purple-100': '#CFBCF2',

        'green-200': '#2DCCA7',
        'green-100': '#C6F7E9',

        'gray-400': '#243B53',
        'gray-300': '#334E68',
        'gray-200': '#829AB1',
        'gray-100': '#F0F4F8'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '2.7rem',
        '6xl': '3rem'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        default: '1.25rem',
        'lg': '3.75rem',
        'full': '9999px'
      },
      boxShadow: {
        default: '0 10px 6px -6px #777',
        outline: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      flex: {
      '0': '0 100%',
      '1': '0 50%',
      '2': '0 33%'
      }
    },
    container: {
      padding: '2rem',
      center: true
    }
}
}