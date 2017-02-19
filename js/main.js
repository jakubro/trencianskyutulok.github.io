---
---
requirejs.config({
  baseUrl: '{{ site.baseurl }}',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    iframeSizer: '../bower_components/iframe-resizer/js/iframeResizer.min'
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
