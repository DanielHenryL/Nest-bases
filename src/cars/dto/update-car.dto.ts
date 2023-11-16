import { IsString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    public readonly brand?:string;

    @IsString()
    @IsOptional()
    public readonly model?:string;
    
}