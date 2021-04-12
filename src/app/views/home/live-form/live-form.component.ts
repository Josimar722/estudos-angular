import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})
export class LiveFormComponent implements OnInit {

 
  constructor(
    public dialogRef: MatDialogRef<LiveFormComponent>
  ) { }

  ngOnInit(): void {
  
  }


  cancel(){
    this.dialogRef.close();
  }



}
