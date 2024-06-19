import {IsBoolean, IsNumber, IsOptional, IsString} from 'class-validator'
export class CreateImplementoDto {
    @IsString()
    descripcion: string

    @IsOptional()
    @IsBoolean()
    disponible?: boolean = true
    
    @IsOptional()
    @IsBoolean()
    estado?: boolean = true
}
