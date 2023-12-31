import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropdownOpen: boolean = false;
  public isMenuVisible: boolean = false;
  
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    }
  }
}