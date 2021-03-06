'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.github.com/kraxnet/pngquant-bin/v' + pkg.version + '/vendor/';

module.exports = new BinWrapper()
	.src(url + 'osx/pngquant', 'darwin')
	.src(url + 'linux/x86/pngquant', 'linux', 'x86')
	.src(url + 'linux/x64/pngquant', 'linux', 'x64')
	.src(url + 'win/pngquant.exe', 'win32')
	.src(url + 'freebsd/pngquant', 'freebsd')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
