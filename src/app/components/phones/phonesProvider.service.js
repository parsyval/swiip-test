export class PhonesProvider {
  constructor ($resource) {
    'ngInject';
    //
    // this.data = [
    //   {
    //     'name': 'One Plus One',
    //     'description': 'My phone',
    //     'img': 'https://content.oneplus.net/skin/frontend/oneplus2015/default/images/products/one/one-sandstone-black-64.png',
    //     'price': '399$',
    //   },
    //   {
    //     'name': 'Nexus 6',
    //     'description': 'Jack\'s phone',
    //     'img': 'http://www.extremetech.com/wp-content/uploads/2014/10/nexus-6-product-photo.jpg',
    //     'price': '439$',
    //   },
    //   {
    //     'name': 'Nokia 3310',
    //     'description': 'The undestructible',
    //     'img': 'http://i.huffpost.com/gen/3371794/images/o-NOKIA-3310-facebook.jpg',
    //     'price': '3$',
    //   }
    // ];

    this.resource = $resource;
  }

  getPhonesUrl(){
    return "http://localhost:666/phones";
  }

  getPhoneList() {
    return new Promise( (resolve, reject) =>{
      this.resource(this.getPhonesUrl()).get(
        a => {resolve(a.data);},
        error => {reject(error);});
    });
  }
}
