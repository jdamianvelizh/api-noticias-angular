import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent  implements OnInit {
  
  @Input() titulo:string;


  constructor(){
    this.titulo = ''
  }
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
