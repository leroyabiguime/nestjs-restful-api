import { ApiProperty } from "@nestjs/swagger"
/**
 * A class ...
 */
export class CreateCarDto {
 
    @ApiProperty()
    marque: string

    @ApiProperty()
    plaque: string

    @ApiProperty()
    dateArrived: Date



}