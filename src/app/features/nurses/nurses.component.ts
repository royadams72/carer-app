import { Component, OnInit } from '@angular/core';
import { NursesService } from 'src/app/services/nurses/nurses.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.scss']
})
export class NursesComponent implements OnInit {

  constructor(private nursesService: NursesService) { }

  ngOnInit() {

    // this.nursesService.getAllNurses()
    // .subscribe((data) => {
    //   console.log(data);
    // });

// this.nursesService.addNurse({nurse_name: 'another nurse'});

  }

}
