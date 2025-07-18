import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards=[
    {
      src:"https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
      alt:"Italian",
      title:"Italian",
      price:"200",
      button:""
    },
    {
      src:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
      alt:"Italian",
      title:"Italian",
      price:"200",
      button:""
    },
    
  ]
}
