export class Survey {
  id: string;
  name: string
  start_date: Date;
  end_date: Date;
  questions: [{
    id: number;
    name: string;
  }];
  answers: [{
    id: number;
    name: string;
  }];
}
