(function(){
    'use strict';

    angular
        .module('demo', ['ui.blueimp.gallery'])
        .controller('UiGalleryCtrl', UiGalleryCtrl);

    UiGalleryCtrl.$inject = ['$scope'];

    function UiGalleryCtrl($scope){

        $scope.list = [
            {
              href: 'images/image1.jpg',
              thumb: 'images/image1_thumb.jpg',
              title: 'First Image'
            },
            {
              href: 'images/image2.jpg',
              thumb: 'images/image2_thumb.jpg',
              title: 'Second Image'
            },
            {
              href: 'images/image3.jpg',
              thumb: 'images/image3_thumb.jpg',
              title: 'Third Image'
            },
            {
              href: 'images/image4.jpg',
              thumb: 'images/image4_thumb.jpg',
              title: 'Fourth Image'
            },
        ];

    }

})();