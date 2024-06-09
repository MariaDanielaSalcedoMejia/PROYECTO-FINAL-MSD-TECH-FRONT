import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { PATH } from '../../enum/path.enum';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(UsuariosService);
  const router = inject(Router);

  return usuariosService.validateToken().pipe(
    map((isAutenticado) => {
      if (!isAutenticado) {
        router.navigateByUrl(PATH.LOGIN);
        return false;
      }
      // Verificar si el usuario tiene el rol ADMIN
      const usuario = usuariosService.usuario;
      if (usuario && usuario.rol && usuario.rol.toUpperCase() === 'ADMIN') {
        return true;
      } else {
        router.navigateByUrl( PATH.HOME);
        return false;
      }
    })
  );
};
