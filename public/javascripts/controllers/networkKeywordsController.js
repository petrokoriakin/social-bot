/**
 * Created by obryl on 2/5/2015.
 */
angular.module('SocialApp.networkKeywordController', []).
    controller('networkKeywordsController', function($scope, $http, $modalInstance, ntw, keywords, $rootScope) {
        var networkNamesMap = {
            fb: "Facebook",
            vk: "Vkontakte"
        };
        $scope.networkName = networkNamesMap[ntw];
        $scope.submitChanges = function () {
            var keywords = [];
            $scope.networkKeywords = $scope.networkKeywords ? $scope.networkKeywords : "";
            $scope.networkKeywords.forEach(function (kw) {
                keywords.push(kw.text);
            });
            $http.put('/api/setup/' + ntw + '/keywords', {
            keywords: keywords
            }).success(function (response) {
                $modalInstance.close(response);
                $rootScope.$emit('groupsChanged');
            });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
        var clone = function (obj) {
            if (null == obj || "object" != typeof obj) return obj;
            var copy = obj.constructor();
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }
            return copy;
        };
        $scope.networkKeywords = clone(keywords);
    });
