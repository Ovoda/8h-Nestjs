import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesServ: MessagesService) {
    }

    @Get()
    listMessages() {
        return this.messagesServ.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesServ.create(body.content);
    }

    @Get(':id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesServ.findOne(id);

        if (!message) {
            throw new NotFoundException('Message not found');
        }

        return message;
    }
}
