import { BoardStatus } from '../boards.model';

export class CreateBoardDto {
  title: string;
  description: string;
  status: BoardStatus;
}
