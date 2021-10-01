import { ApiProperty } from "@nestjs/swagger"

export class CreateCarDto {
    @ApiProperty()
    id: string
    
    @ApiProperty()
    marque: string


    @ApiProperty()
    plaque: string
}