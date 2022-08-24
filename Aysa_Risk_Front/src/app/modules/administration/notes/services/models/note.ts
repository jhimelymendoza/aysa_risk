export class Note {
  id: number;
  text: string;

  constructor(option?: any) {
    this.id = option.id ?? 0;
    this.text = option?.text ?? '';
  }
}
