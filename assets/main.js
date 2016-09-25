requirejs.config({
  baseUrl: '/assets',
  paths: {
    jquery: 'components/jquery/dist/jquery.min',
    iframeSizer: 'components/iframe-resizer/js/iframeResizer.min'
  }
});

// Start the main app logic.
requirejs([
  'jquery',
  'iframeSizer'
],
function (jQuery, iframeSizer) {
  jQuery(document).ready(function ($) {

    if ($('.fb-page-gallery').length) {
      iframeSizer({}, '.fb-page-gallery');
    }
  });
});
