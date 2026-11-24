import { Component } from '@angular/core';

@Component({
  selector: 'app-day2',
  standalone: false,
  styleUrl: './day2.css',
  templateUrl: './day2.html',
})
export class Day2 {
name : string = "ghaith";

imgsrc : string = "https://media.licdn.com/dms/image/v2/D4E0BAQFEAKvQAZ8Zmg/company-logo_200_200/B4EZsOHFSBJ0AQ-/0/1765468296836/img_logo?e=2147483647&v=beta&t=shYVYg3atXalYcBkQoeU4p0Ih2_wf5HwRFWiLTemLt8";

isDisabled : boolean = false;

onButtonClick(){
  alert("Button clicked!");
}

number : number = 0;

increase(){
  this.number++;
}
decrease(){
  if(this.number !== 0)
  this.number--;
else{
  alert("number can't be negative");
}
}


category : string = "";

}
