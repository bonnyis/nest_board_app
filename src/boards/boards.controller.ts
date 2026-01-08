import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board-dto';
@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board | undefined {
    return this.boardService.getBoardById(id);
  }
  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }
  @Delete()
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }
  @Patch('/:id')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Board | void {
    return this.boardService.updateBoardStatus(id, status);
  }
}
