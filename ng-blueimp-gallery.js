(function () {
    'use strict';
    angular
        .module('ui.blueimp.gallery', ['ui.blueimp.gallery.templates'])
        .directive('uiGallery', uiGallery);

    uiGallery.$inject = ['$window'];

    function uiGallery($window){

        var directive = {
            templateUrl: 'gallery.html',
            scope: {
                options: '=',
                list: '='
            },
            link: link
        };
        return directive;


        function link(scope, element, attr) {
            scope.slides = scope.list;

            // Dynamically update list value.
            scope.$watch('list', function(newVal, oldVal){
                scope.slides = newVal;
            });

            angular.element("#links").on('click', function(event){
                event = event || $window.event;
                var target = event.target || event.srcElement,
                    link = target.src ? target.parentNode : target,
                    options = {index: link, event: event},
                    links = this.getElementsByTagName('a');

                angular.extend(options, scope.options);

                if(blueimp){
                    blueimp.Gallery(links, options);
                }else{
                    console.log('Make sure you added blueimp-gallery.js file');
                }

            });
        }
    }

    angular
        .module("ui.blueimp.gallery.templates", [])
        .run(uiGalleryTemplate);


    uiGalleryTemplate.$inject = ['$templateCache'];

    function uiGalleryTemplate($templateCache){
        $templateCache.put("gallery.html","<div id=\"blueimp-gallery\" class=\"blueimp-gallery blueimp-gallery-controls\">\n <div class=\"slides\"></div>\n <h3 class=\"title\"></h3>\n <a class=\"prev\">‹</a>\n <a class=\"next\">›</a>\n <a class=\"close\">×</a>\n <a class=\"play-pause\"></a>\n <ol class=\"indicator\">\n <li ng-repeat=\"slide in slides\" title=\"{{slide.title}}\" data-index=\"{{$index}}\" style=\"background-image: url({{slide.thumb}})\"></li>\n </ol>\n </div>\n\n <div id=\"links\" class=\"links blueimp-gallery-inner\">\n  <a ng-repeat=\"slide in slides\" href=\"{{slide.href}}\" title=\"{{slide.title}}\" data-index=\"{{$index}}\">\n    <img ng-src=\"{{slide.thumb}}\" alt=\"{{slide.title}}\">\n  </a>\n</div>\n");
    }

})();
