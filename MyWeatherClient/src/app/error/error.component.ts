import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage:string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {    
    this.errorMessage = this.route.snapshot.paramMap.get('errorMessage') ;
  }

}
