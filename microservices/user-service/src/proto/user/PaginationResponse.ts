// Original file: src/proto/user.proto

import type { UserFindAll as _user_UserFindAll, UserFindAll__Output as _user_UserFindAll__Output } from '../user/UserFindAll';

export interface PaginationResponse {
  'datas'?: (_user_UserFindAll)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}

export interface PaginationResponse__Output {
  'datas'?: (_user_UserFindAll__Output)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}
