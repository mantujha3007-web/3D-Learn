import { withAuth } from "next-auth/middleware";

export default withAuth(
  function proxy(req) {
    // Optionally add custom logic here
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/login',
    }
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
