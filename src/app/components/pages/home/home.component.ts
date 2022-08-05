import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';



import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  baseApiUrl=environment.baseApiUrl

  //todo search

  constructor(private momentService:MomentService) { }

  ngOnInit(): void {









}



  }

