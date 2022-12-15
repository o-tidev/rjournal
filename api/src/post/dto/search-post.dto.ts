export class SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
  tags?: string;
}
