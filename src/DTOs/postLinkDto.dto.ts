import { ApiProperty } from '@nestjs/swagger';


export class PostLink {
    @ApiProperty()

    url: string;
    @ApiProperty()

    num: number;
    @ApiProperty({description: 'an array!'})

    x:[];

}