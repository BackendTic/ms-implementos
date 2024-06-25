import { TipoImplemento } from '@prisma/client'
import {IsBoolean, IsEnum, IsNumber, IsOptional, IsString} from 'class-validator'
import { TipoImplementoList } from 'src/enum/implementos.enum'
export class CreateImplementoDto {
    @IsString()
    nombre: string

    @IsOptional()
    @IsBoolean()
    disponible?: boolean = true
    
    @IsOptional()
    @IsBoolean()
    estado?: boolean = true

    @IsEnum(TipoImplementoList, {
        message: `El implemento debe pertenecer a: ${TipoImplementoList}`
    })
    disciplina: TipoImplemento

    @IsOptional()
    imagen: any

}
