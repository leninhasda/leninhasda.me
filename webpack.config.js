const path = require('path');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  mode: 'development',
  module: {
  	rules: [
  		// {
  		// 	test: /\.css$/,
  		// 	use; [
  		// 		'style-loader',
  		// 		'css-loader'
  		// 	]
  		// },
  		{
  			test: /\.less$/,
  			use: [
  				'less-loader'
  			]
  		},
  		{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
        ]
     },
  	]
  }
};