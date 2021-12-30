import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 newMemberText='';
 members:string[]=[];
 teams: any[]=[];
 numberOfTeams: '' | number = '';
 errorMessage='';

 onInput(value:string){
   this.newMemberText=value;
   //console.log(this.newMemberName);
; }
onTeamSizeInput(value: string) {
  this.numberOfTeams = Number(value);
}

onClick() {
  if (!this.newMemberText.length) {
    this.errorMessage = "Name can't be empty";
    return;
  }

  this.errorMessage = '';
  this.members.push(this.newMemberText);
  this.newMemberText = '';
}
 addMember(){
   this.members.push(this.newMemberText);
   console.log(this.members);
 }
 generateTeams(){

  this.teams = [];
  const allMembers = [...this.members];

  if (this.members.length < this.numberOfTeams) {
    this.errorMessage = 'Not enough members';
    return;
 }
 this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    console.log(this.teams);
    console.log(this.members);
    //this.members = [];
    //this.numberOfTeams = '';
  
 }
}
