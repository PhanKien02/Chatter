import { IUser } from '@/interfaces/user.interface';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from 'proto/user/User';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';


interface GrpcUserService {
    FindAll(query: IQuery<IUser>): Observable<User[]>;
    Create(body: CreateUserDto): Observable<User>
}

@Injectable()
export class UserService implements OnModuleInit {
    private userService: GrpcUserService;

    constructor(
        @Inject('USER_PACKAGE') private readonly userClient: ClientGrpc,
    ) { }

    onModuleInit() {
        this.userService = this.userClient.getService<GrpcUserService>('UserService');
    }

    async getAllUsers(query: IQuery<IUser>) {
        const data = await firstValueFrom(this.userService.FindAll(query))
        return data;
    }
    async createUser(body: CreateUserDto) {
        const data = this.userService.Create(body);
        const result = await firstValueFrom(data);
        return result;
    }
}
