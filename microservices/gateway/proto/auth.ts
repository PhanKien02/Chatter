import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_AuthServiceClient, AuthServiceDefinition as _auth_AuthServiceDefinition } from './auth/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    Auth: MessageTypeDefinition
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: _auth_AuthServiceDefinition }
    FindOnePayLoad: MessageTypeDefinition
    Login: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    Logout: MessageTypeDefinition
    LogoutResponse: MessageTypeDefinition
    RefreshToken: MessageTypeDefinition
    Register: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
    ResendOtpResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    VeryfyOTP: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

