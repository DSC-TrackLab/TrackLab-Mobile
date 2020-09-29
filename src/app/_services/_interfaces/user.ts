export interface User {
  uid: string;
  email: string;
  displayName: string;
  cell: string;
  emailVerified: boolean;
  UserType:'admin'|'user'|'driver'

}