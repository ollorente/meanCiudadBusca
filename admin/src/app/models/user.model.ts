export class User {
    _id?: string;
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    is_superuser: boolean;
    is_staff: boolean;
    active: boolean;
    lock: boolean;
    created_at: Date;
    updated_at: Date;
    n?: number;
}
