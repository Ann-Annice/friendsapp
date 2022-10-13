import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendsapp',
  templateUrl: './friendsapp.component.html',
  styleUrls: ['./friendsapp.component.css']
})
export class FriendsappComponent implements OnInit {

  constructor() { }
  _id=""
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{
    let data
  }

  ngOnInit(): void {
  }

}
