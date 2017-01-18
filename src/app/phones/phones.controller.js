export class PhonesController {
  constructor (PhonesProvider, $scope, $log) {
    'ngInject';

    PhonesProvider.getPhoneList().then(data => {
      this.phoneList = data;
      $scope.$apply();
    }).catch(error => {
      $log.error(error);
      this.error = "We couldn't get the list, verify your connection or try again later";
      $scope.$apply();
    });
  }
}
