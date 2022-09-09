import { Controller, Get, Post, Param, Body ,Query} from '@nestjs/common';
import { AppService } from './app.service';
import { PostLink } from './DTOs/postLinkDto.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { arrayBuffer } from 'stream/consumers';
import { query } from 'express';
@Controller('cats')
@ApiTags('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @ApiQuery({name:'URL',  required: false })
  @ApiQuery({name:'x',  required: false })

  @Post('PostExample')
  async postLink(@Body() linkDto: PostLink,  @Query('x') x:string ) {
   
    return `this is an API request with Body ${linkDto.num} and ${x}`;

  }
}
