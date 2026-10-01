import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private router = inject(Router);

  buscar(termo: string): void {
    if (termo.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: termo } });
    }
  }
}