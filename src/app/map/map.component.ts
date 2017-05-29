import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tour-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public zoom: number = 14;
  public oldenburgLatLng = { lat: 53.1432439, lng: 8.2214212 };
  public styleArray = [
    {
      featureType: 'all',
      stylers: [
        { saturation: -80 }
      ]
    }, {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
      ]
    }, {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
