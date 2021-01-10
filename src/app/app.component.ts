import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
    <p>property binding<p>
    <h1 [id]="newid">shehas</h1>
    <h1 id={{id}}>shehas</h1>
    <h1 bind-id = "id">shehas</h1>
    
    <p>class binding<p>
    <h2 class="text-success">Hello world</h2>
    <h2 [class] = "successClass" >Hello World</h2>
    <h2 [class.text-danger] = "hasError" >Error</h2>
    <h2 [ngClass]="messageClass">Hello</h2>

    <p>style binding<p>
    <h2 [style.color]="hasError ? 'red' : 'green' " >Style binding</h2>
    <h2 [style.color] = "highlightColor">Style binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style binding 3</h2>

    <p>Event binding</p>
    
    <button (click)="onClick()">click</button>
    <h3>{{message}}</h3>

    <p>template referals </p>
    <input #name type="text">
    <button (click)="display(name.value)">click</button>
    <h2>{{myName}}</h2>

    <p>two way binding</p>
    <input [(ngModel)]="myNewName" type="text">
    <h2>{{myNewName}}</h2>

  `,
  // styleUrls: ['./app.component.css']
  styles:[`
    #myId{
      color:tomato;
    }

    #newid{
      color:green;
    }
    div{
      color: red;
    }
    .text-success{
      color:green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent {
  
  public name = "Shehas"
  public id = "myId";

  newid = 'newid'

  public successClass =  "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic",
    backgroundColor: "yellow"
  }

  public message = "";
  onClick(){
    this.message = "Hello,world"
  }
  public myName = "";
  display(name){
    this.myName = name;
  }
 
  public myNewName ="";
}
