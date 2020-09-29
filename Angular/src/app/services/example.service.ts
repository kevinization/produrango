import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Example } from '../models/example';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  selectedExample: Example;
  examples: Example[];
  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { 
    this.selectedExample = new Example();
  }

  getExamples(){
    return this.http.get(this.URL_API);
  }

  postExample(Example: Example){
    return this.http.post(this.URL_API, Example);
  }

  putExample(example: Example){
    return this.http.put(this.URL_API + `/${example._id}`, example);
  }

  deleteExample(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
