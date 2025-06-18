import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card';

import { MatDivider } from '@angular/material/divider';
import {AuthentificationService} from '../services/authentification.service';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [

    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatDivider,
    CommonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  constructor(public authService:AuthentificationService) {
  }
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}

