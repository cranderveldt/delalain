var Main = function ($scope) {
  $scope.interval = 5000;
  $scope.home = [
      '/images/home-bertrand.jpg'
    , '/images/home-gabriel.jpg'
    , '/images/home-leon.jpg'
    , '/images/home-masada.jpg'
    , '/images/home-simon.jpg'
  ];
  $scope.portfolio = [
      {
        title: 'GABRIEL', description: 'Polished steel desk with solid wood drawer. Custom hand grinding creates a warm silver/bronze color and feels as smooth as silk. 48" wide by 27" deep by 30" high. Custom sizes and finishes available.', 
        images: ['/images/portfolio/gabriel-1.jpg','/images/portfolio/gabriel-2.jpg','/images/portfolio/gabriel-3.jpg','/images/portfolio/gabriel-4.jpg']
      }
    , {
        title: 'GABRIELLE', description: 'Polished steel console with solid wood drawer. Custom hand grinding ensures a unique finish that has a warm silver/bronze color and feels as smooth as silk. 48" wide by 12" deep by 32" high. Custom sizes and finishes available.', 
        images: ['/images/portfolio/gabrielle-1.jpg']
      }
    , {
        title: 'GABRIELLE DEMI-LUNE', description: 'Polished steel Demi-Lune Console. Custom hand grinding ensures a unique finish that has a warm silver/bronze color and feels as smooth as silk. 44" wide by 16" deep by 32" high. Custom sizes and finishes available.', 
        images: ['/images/portfolio/gabrielle_demi_lune-1.jpg','/images/portfolio/gabrielle_demi_lune-2.jpg']
      }
    , {
        title: 'Marie', description: 'Hand carved white oak side-table with a Ceruse paint finish. Wnge legs are turned to look like stilettos. Drawers on soft close runners. 30" wide by 20" deep by 24" high. Custom sizes and finishes available.', 
        images: ['/images/portfolio/marie-1.jpg','/images/portfolio/marie-2.jpg','/images/portfolio/marie-3.jpg']
      }
    , {
        title: 'BERTRAND', description: 'Hand carved white oak desk with paint finish. The top if the desk and inside the drawer are covered with matching leather. 48" wide by 27" deep by 30" high. Custom sizes and finishes available upon request.', 
        images: ['/images/portfolio/bertrand-1.jpg','/images/portfolio/bertrand-2.jpg','/images/portfolio/bertrand-3.jpg']
      }
    , {
        title: 'LEON', description: 'White oak chest of drawers with a polished steel case. The drawers have and undermount soft close system that works silently and effortlessly. 65" wide by 20" deep by 32.5" high. Custom sizes and finishes available upon request.', 
        images: ['/images/portfolio/leon-1.jpg','/images/portfolio/leon-2.jpg','/images/portfolio/leon-3.jpg']
      }
    , {
        title: 'LILY', description: 'Quartersawn Zebrawood side-table with hand turned legs. The top of this piece has diamond cut veneer and a solid wood drawer with soft close runners. 48" wide by 27" deep by 30" high. Custom sizes and finishes available.', 
        images: []
      }
    , {
        title: 'MASADA', description: 'Walnut day bed with built-in drawers. 83" wide by 42" deep by 38.5" high. Custom sizes and finishes available upon request.', 
        images: ['/images/portfolio/masada.jpg']
      }
    , {
        title: 'SIMON', description: 'African mahogany desk with raw steel legs and soft-closing drawers. 60" wide by 22" deep and 29" high. Custom sizes and finishes available upon request.', 
        images: ['/images/portfolio/simon-1.jpg','/images/portfolio/simon-3.jpg','/images/portfolio/simon-4.jpg']
      }
    , {
        title: 'CELESTINE', description: 'Raw steel lamp with Chinese lacquered base and linen shade 88" high; base - 18"; shade - 24" wide by 12" high. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'ETOILE', description: 'Convex mirror with solid wood frame. The finish pays homage to the AMerican flag. 42" in diameter. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'MORTIMER', description: 'Wood frame is sculpted to resemble circular ripples across still water. Mirror has a beveld edge. 31.5" in diameter. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'MARGUERITE', description: 'Solid wood frame with unique finish that has the texture of leather. Mirror has a beveled edge. 44" in diameter. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'MORTIMER', description: 'Wood frame is sculpted to resemble circular ripples across still water. Mirror has a beveled edge. 23.5" in diameter. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'MARVEL', description: 'Convex mirror with a solid wood frame finished in an antique crackled paint. 38" in diameter. Custom sizes and finishes available upon request.', 
        images: []
      }
    , {
        title: 'GASPAR', description: 'Armoir with wenge wood exterior and white oak interior. Blackened steel base and custom steel handles. 46" wide by 24" deep by 88" high. Custom sizes and finishes available.', 
        images: ['/images/portfolio/gaspar-1.jpg','/images/portfolio/gaspar-2.jpg','/images/portfolio/gaspar-3.jpg']
      }
  ];
  $scope.getPrimaryImage = function(item) {
    return item.primary_image || item.images[0];
  };
  $scope.changePrimaryImage = function(item, thumb) {
    item.primary_image = thumb;
  };
  $scope.getRandomHomePhoto = function() {
    return $scope.home[Math.floor(Math.random() * $scope.home.length)];
  };
};
var app = angular.module('delalain', ['ngTouch','ui.bootstrap']);
app.controller('Main',['$scope', Main]);
app.directive('dlSlideshow', function () {
  return {
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    link: function ($scope, element, attrs) {
      
    }
  };
});