import { ApiProperty } from "@nestjs/swagger"

export class CreateCarDto {
 
    @ApiProperty()
    marque: string

    @ApiProperty()
    plaque: string
}