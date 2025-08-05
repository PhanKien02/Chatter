// Original file: src/proto/auth.proto

import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface LoginResponse {
        user?: _auth_User | null;
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: string;
}

export interface LoginResponse__Output {
        user?: _auth_User__Output;
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: string;
}
