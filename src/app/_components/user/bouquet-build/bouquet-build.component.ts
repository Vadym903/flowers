import { Component, OnInit } from '@angular/core';
import { Flower } from "../../../_models/flower";
import { Package } from "../../../_models/package";

@Component({
  selector: 'app-bouquet-build',
  templateUrl: './bouquet-build.component.html',
  styleUrls: ['./bouquet-build.component.scss']
})
export class BouquetBuildComponent implements OnInit {

  flowers: Flower[] = []
  packaging: Package[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initFlowers();
  }

  private initFlowers(): void {
    this.flowers.push(new Flower('https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-pink__0638903_pe699256_s5.jpg?f=xs'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4DK4EQGo5HxC8t802R0BjKjIySAlgdC2AwBwliN12Nx_KkEm_xIUbya_J9CL3oxIVPY&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBP2IOL1apMMNXZ3xdG7LIY7r3JCkmep0E6BEW0qip-digfAsoxox9BOmt-YObHR5jHek&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvo-ezYO854DMnx4M2cCyPAyagWZitUFSRGl4A6w7icOXyyTAuEvtk2tC9kaiKCXDdVw&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_oKH5U-6BUzaV2neByzb3pJPJimXqS9ojuoBlmQIbABxxvcKlFbTIJm5LOcyKFEQA6M&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBaB25y2HLqgYNFZjwTYmLaDLdQX4ZrFFZp5E0P2orrn3fCjpyYpGnZs_MwNinv6k_dJI&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lC0nsNXyxhrB37l-TO6D8RlRVOeD6KYgOkV4qEYGynmAFBYx5wp73xPWYdZl3cLRP98&usqp=CAU'));
    this.flowers.push(new Flower('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjWGuU7qPccA6RAwd07M3q87m0HMj39U-Hg&usqp=CAU'));

    this.packaging.push(new Package('https://dandecollections.com/wp-content/uploads/2021/03/W7363.jpg'))
  }

}
