import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from '../user.utils';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { Apollo } from 'apollo-angular';
import { DELETE_USER } from '../../graphql.operations';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-user-profile.component.html',
})
export class ViewUserProfileComponent implements OnInit {
    @Input() selectedUserData: User

    constructor(
      public dialog: MatDialog,
      private apollo: Apollo,
    ){}

    ngOnInit(): void {
    }

    public editUser(){
      const dialogRef = this.dialog.open(AddEditUserComponent, {
        width: '600px',
        data: this.selectedUserData,
      })
    }

    public deleteCompany(){
      this.apollo
    .mutate({
      mutation: DELETE_USER,
      variables: {
        id: this.selectedUserData.id,
      },
    })
    .subscribe(
      ({ data }) => {
        console.log('Successfully Deleted', data);
      },
      error => {
        console.log('there was an error sending the query', error);
      },
    );
    }

}