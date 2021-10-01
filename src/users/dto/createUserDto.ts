import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    birthDate: Date

    @ApiProperty()
    password: string

    @ApiProperty()
    telNumber: string

    @ApiProperty()
    email: string

}