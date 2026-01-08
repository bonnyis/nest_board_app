import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v4 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board-dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  // 특정 ID로 게시글 조회
  getBoardById(id: string): Board | undefined {
    return this.boards.find((board) => board.id === id);
  }
  // 게시글 생성
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description, status } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: status ?? 'PUBLIC',
    };
    this.boards.push(board);
    return board;
  }
  // 게시글 삭제
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
  // 게시글 수정
  updateBoardStatus(id: string, status: BoardStatus): Board | undefined {
    const boardId: any = this.getBoardById(id);
    boardId.status = status;

    return boardId;
  }
}
