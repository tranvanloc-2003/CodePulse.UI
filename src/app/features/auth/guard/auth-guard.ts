import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServices } from '../services/auth.services';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieServices = inject(CookieService);
  const authService = inject(AuthServices);
  const router = inject(Router);
  const user = authService.getUser();
  // Kiểm tra xem cookie có tồn tại và có giá trị hợp lệ không
  let token = cookieServices.get('Authorization');
  if (token && user) {
    token = token.replace('Bearer ', '');
  const decodedToken:any = jwtDecode(token);
    // Kiểm tra xem token có hop lệ không
    const expirationDate = decodedToken.exp * 1000; // Chuyển đổi thời gian hết hạn từ giây sang mili giây
    const currentTime = new Date().getTime(); // Lấy thời gian hiện tại
    if( expirationDate < currentTime) {
      // Token đã hết hạn, đăng xuất và chuyển hướng đến trang đăng nhập
      authService.logout();
      return router.createUrlTree(['/auth/login'], {
        queryParams: { returnUrl: state.url } // Lưu lại URL để chuyển hướng
      });
    }else{
      // Token hợp lệ, cho phép truy cập vào route
      if (user.roles.includes('Write')) {
        return true; // Cho phép truy cập nếu người dùng là admin
      } else {
        // Nếu không phải admin, chuyển hướng đến trang chính hoặc trang khác
        alert('Bạn không có quyền truy cập vào trang này.');
        return false;
      }
    }
  } else {
    authService.logout();
    // Nếu không có token, chuyển hướng đến trang đăng nhập
    return router.createUrlTree(['/auth/login'], {
      queryParams: { returnUrl: state.url } // Lưu lại URL để chuyển hướng
    }
    );
  }
};
