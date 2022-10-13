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
    let data={
      "_id":this._id,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
  }

  ngOnInit(): void {
  }

}
