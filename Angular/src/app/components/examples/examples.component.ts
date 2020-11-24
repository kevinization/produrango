import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Example } from 'src/app/models/example';

import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
  providers: [ExampleService]
})
export class ExamplesComponent implements OnInit { 

  constructor(public exampleService: ExampleService) { }

  ngOnInit(): void {
    this.getExamples();
  }
  // tslint:disable-next-line: typedef
  addExample(form: NgForm) {
    console.log(form.value);
    if (form.value._id){
      this.exampleService.putExample(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          // Actualizado satisfactoriamente
          this.getExamples();
        });
    }else {
      console.log(form.value);
      this.exampleService.postExample(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          // Guardado satisfactoriamente
          this.getExamples();
        });
    }
  }

  // tslint:disable-next-line: typedef
  getExamples() {
    this.exampleService.getExamples()
      .subscribe(res => {
        this.exampleService.examples = res as Example[];
        console.log(res);
      });
  }
  // tslint:disable-next-line: typedef
  editExample(example: Example) {
    this.exampleService.selectedExample = example;
  }

  // tslint:disable-next-line: typedef
  deleteExample(_id: string){
    if (confirm('¿Estás seguro que quieres eliminarlo?')){
      this.exampleService.deleteExample(_id)
        .subscribe(res => {
          console.log(res);
          this.getExamples();
          // Usuario eliminado satisfactoriamente
      });
    }
  }
  // tslint:disable-next-line: typedef
  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.exampleService.selectedExample = new Example();
    }
  }
}
