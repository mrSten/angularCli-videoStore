import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';


@Component({
  selector: 'app-confirmations',
  templateUrl: './confirmations.component.html',
  styleUrls: ['./confirmations.component.css']
})
export class ConfirmationsComponent implements OnInit {

  constructor(public confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

}
