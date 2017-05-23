import { Component, OnInit ,Directive} from '@angular/core';

@Component({
  selector: 'tour-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: 'md-card-footer, mat-card-footer',
  host: {
    '[class.mat-card-footer]': 'true'
  }
})
export class MdCardFooter {}