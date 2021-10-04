export enum ColorButton {BASIC = 'basic', PRIMARY = 'primary', ACCENT = 'accent', WARN = 'warn'}
export class FloatButton{
  color: ColorButton;
  ariaLabel: string;
  icon: string;
  action: any;

  constructor(_color: ColorButton, _ariaLabel: string, _icon?:string, _action?:any){
    this.color = _color;
    this.ariaLabel = _ariaLabel;
    this.icon = _icon ? _icon : 'view_headline';
    this.action = _action;
  }
}
