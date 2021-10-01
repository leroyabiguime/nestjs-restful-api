import { ApiProperty } from "@nestjs/swagger";
/**
 * CreateUserDto is a class to show form
 * data, that need to be send
 */
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