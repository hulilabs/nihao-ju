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
    baseUrl: 'public',
    paths: {
            'lib' : 'js/lib',
            'ju-example' : 'js/ju-example',
    		'jquery' : 'js/lib/vendor/jquery/dist/jquery',
    		'ju-shared' : 'js/lib/vendor/ju-shared',
			'ju-mvc' : 'js/lib/vendor/ju-mvc',
			'ju-components' : 'js/lib/vendor/ju-components/src',
			'blueimp-md5' : 'js/lib/vendor/blueimp-md5/js/md5',
            'text' : 'js/lib/vendor/text/text'
    }
});

require([
			'ju-example/app'
        ],

    	function () {

		}
);