export interface IOptionSelect<T> {
  id: T;
  label: string;
}

export class OptionSelect<T> implements IOptionSelect<T> {
  id: T;
  label: string;

  constructor(option?: any) {
    this.id = option.id ?? 0;
    this.label = option?.label ?? '';
  }
}
