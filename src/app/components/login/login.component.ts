import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, merge } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  filledIn = '';
  resetPass = false;
  message = { text: '', type: null };
  message$ = new Subject<{ text: string; type: string }>();
  reseting = false;
  inviting = false;
  confirmPassword = '';
  userName = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data['reset']) {
        this.reseting = true;
      }
      if (data['invite']) {
        this.inviting = true;
        this.userName = this.route.snapshot.params['email'];
      }
    });
    /* this.message$.subscribe(message => {
      this.matSnackBar.open(message.text, null, {
        duration: 5000000,
        panelClass: message.type
      });
    }); */
  }

  checkPasswordMatch(): boolean {
    const passwordMatch = this.password === this.confirmPassword;
    if (!passwordMatch) {
      if (this.confirmPassword !== '') {
        this.message$.next({ text: 'Password mismatch', type: 'error' });
        return false;
      } else {
        this.message$.next({
          text: 'Please type your password a second time',
          type: 'notice'
        });
      }
    }
    return true;
  }

  setPassword() {
    if (this.checkPasswordMatch()) {
      /* this.apiService
        .confirmInvite$(
          this.route.snapshot.params['userId'],
          this.password,
          this.route.snapshot.params['token']
        )
        .subscribe(data => {
          if (this.userName) {
            this.email = this.userName;
            this.login();
          } else {
            this.reseting = false;
            this.message$.next({
              text: 'You can now login with your new password',
              type: 'notice'
            });
          }
        }); */
    }
  }




  login(): void {
   /*  this.apiService.login(this.email, this.password).subscribe(
      () => {
        this.router.navigateByUrl(this.route.snapshot.queryParams.from);
      },
      () => {
        this.message$.next({
          text: 'We could not log you in with those credentials.',
          type: 'error'
        });
      }
    ); */
  }

  requestReset(): void {
    /* this.apiService.passwordReset$(this.email).subscribe(() => {
      this.resetPass = false;
      this.message$.next({
        text: 'A email with reset instructions has been send to your inbox.',
        type: 'notice'
      });
    }); */
  }

  checkFilledIn(): void {
    if (this.email) {
      if (!this.resetPass && this.password) {
        this.filledIn = 'primary';
      } else if (this.resetPass) {
        this.filledIn = 'primary';
      } else {
        this.filledIn = '';
      }
    } else {
      this.filledIn = '';
    }
  }

  forgot(): void {
    this.resetPass = true;
  }
  cancel(): void {
    this.resetPass = false;
  }
}
