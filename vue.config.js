const { defineConfig } = require('@vue/cli-service')

/*
module.exports = defineConfig({
  transpileDependencies: true,
    
})
*/

module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
     'account': {
      entry: './src/pages/Account/main.js',
      title: 'Account',
      chunks: [ 'chunk-vendors', 'chunk-common', 'account' ]
    },
    'read': {
      entry: './src/pages/Read/main.js',
      title: 'Read',
      chunks: [ 'chunk-vendors', 'chunk-common', 'read' ]
    },
      'success': {
      entry: './src/pages/Success/main.js',
      title: 'Success',
      chunks: [ 'chunk-vendors', 'chunk-common', 'success' ]
    },
    'text': {
      entry: './src/pages/Text/main.js',
      title: 'Text',
      chunks: [ 'chunk-vendors', 'chunk-common', 'text' ]
    },
      'viewAccount': {
      entry: './src/pages/ViewAccount/main.js',
      title: 'View Account',
      chunks: [ 'chunk-vendors', 'chunk-common', 'viewAccount' ]
    },
    'write': {
      entry: './src/pages/Write/main.js',
      title: 'Write',
      chunks: [ 'chunk-vendors', 'chunk-common', 'write' ]
    },
  },
    
}



