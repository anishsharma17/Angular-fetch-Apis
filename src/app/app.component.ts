import { Component, OnInit } from '@angular/core';
import { RecordService } from './record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  filterString: String = "";
 userdata:any= []
   constructor(private record:RecordService){ 
    this.record.getData().subscribe(data=>{
      console.warn(data);
      this.userdata = Object.values(data);
      console.warn(this.userdata[4][1].email);
    })
    
  }
  

}


