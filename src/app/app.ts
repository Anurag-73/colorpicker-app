import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedColor = signal('#3498db');

  // Change selected color
  onColorChange(newColor: string) {
    this.selectedColor.set(newColor);
  }

  copyColor() {
    navigator.clipboard.writeText(this.selectedColor()).then(() => {
      alert('Color copied successfully!');
    }).catch((error) => {
      console.error('Failed to copy color:', error);
    });
  }
}
