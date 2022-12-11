import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user = null;
  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
   // return this.user != null;
   return true;
  }

  expandPanel(matExpansionPanel: MatExpansionPanel): void {
    matExpansionPanel.close(); // Here's the magic
  }


}
