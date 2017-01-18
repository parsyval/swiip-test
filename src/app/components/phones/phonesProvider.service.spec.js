describe('phones provider', () => {

  var service;
  var http;

  beforeEach(angular.mock.module('swiipPhones'));
  beforeEach(inject((PhonesProvider, $httpBackend) => {
    service = PhonesProvider;
    http = $httpBackend;
  }));

  describe('getPhoneList function', () => {
    it('should exist', () => {
      expect(service.getPhoneList).not.toBeNull();
      //expect(PhonesProvider.getPhoneList).toEqual(jasmine.any(Promise));
    });

    it('should return array of object', (done) => {
      var fail = function(error){
        expect(error).toEqual(jasmine.any(Object));
      }

      var success = function(data){
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length === 3).toBeTruthy();
      }

      http.expectGET(service.getPhonesUrl());
      service.getPhoneList().then(success).catch(fail).finally(done);

      http.flush();
    });
  });
});
