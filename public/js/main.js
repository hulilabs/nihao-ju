/**                   _
 *  _             _ _| |_
 * | |           | |_   _|
 * | |___  _   _ | | |_|
 * | '_  \| | | || | | |
 * | | | || |_| || | | |
 * |_| |_|\___,_||_| |_|
 *
 * (c) Huli Inc
 */

require.config({
    baseUrl: 'public/js',
    paths: {
    		'jquery' : 'lib/vendor/jquery/dist/jquery',
    		'ju-shared' : 'lib/vendor/ju-shared',
			'ju-mvc' : 'lib/vendor/ju-mvc',
			'ju-components' : 'lib/vendor/ju-components/src',
			'blueimp-md5' : 'lib/vendor/blueimp-md5/js/md5'
    }
});

require([
			'app'
        ],

    	function () {

		}
);