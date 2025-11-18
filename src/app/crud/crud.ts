import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud {
  items: { name: string; id: number }[] = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')!) : [];
  value: string = '';

  constructor() { }

  set ItemName(newValue: string) {
    this.value = newValue;
  }

  createItem() {
    const newItem = this.value;
    this.items.push({ name: newItem, id: this.items.length + 1 });
    localStorage.setItem('items', JSON.stringify(this.items));
    this.value = '';
  }

  editItem(item: { name: string; id: number }) {
    const newName = prompt('Edit item name:', item.name);
    if (newName !== null && newName.trim() !== '') {
      item.name = newName.trim();
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  deleteItem(item: { name: string; id: number }) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }

}
