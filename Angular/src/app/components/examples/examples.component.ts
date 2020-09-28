import { Component, OnInit } from '@angular/core';

import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
  providers: [ExampleService]
})
export class ExamplesComponent implements OnInit {

  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
  }

}
