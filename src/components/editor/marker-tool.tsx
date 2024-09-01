import {
  API,
  InlineTool,
  InlineToolConstructorOptions,
} from '@editorjs/editorjs';

export default class MarkerTool implements InlineTool {
  private api: API;
  private button: HTMLButtonElement | null;
  private _state: boolean;
  private tag: string;
  private class: string;
  private colorPicker: HTMLInputElement | null;

  constructor({ api }: InlineToolConstructorOptions) {
    this.api = api;
    this.button = null;
    this._state = false;

    this.tag = 'MARK';
    this.class = 'cdx-marker';
    this.colorPicker = null;
  }

  static get isInline() {
    return true;
  }

  get state(): boolean {
    return this._state;
  }

  set state(state: boolean) {
    this._state = state;
    if (this.button) {
      this.button.classList.toggle(
        this.api.styles.inlineToolButtonActive,
        state
      );
    }
  }

  render(): HTMLElement {
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.innerHTML =
      '<svg width="20" height="18"><path d="M10.458 12.04l2.919 1.686-.781 1.417-.984-.03-.974 1.687H8.674l1.49-2.583-.508-.775.802-1.401zm.546-.952l3.624-6.327a1.597 1.597 0 0 1 2.182-.59 1.632 1.632 0 0 1 .615 2.201l-3.519 6.391-2.902-1.675zm-7.73 3.467h3.465a1.123 1.123 0 1 1 0 2.247H3.273a1.123 1.123 0 1 1 0-2.247z"/></svg>';
    this.button.classList.add(this.api.styles.inlineToolButton);

    return this.button;
  }

  surround(range: Range): void {
    if (this.state) {
      this.unwrap(range);
      return;
    }

    this.wrap(range);
  }

  wrap(range: Range): void {
    const selectedText = range.extractContents();
    const mark = document.createElement(this.tag);

    mark.classList.add(this.class);
    mark.appendChild(selectedText);
    range.insertNode(mark);

    this.api.selection.expandToTag(mark);
  }

  unwrap(range: Range): void {
    const mark = this.api.selection.findParentTag(this.tag, this.class);
    if (!mark) return;

    const text = range.extractContents();
    mark.remove();
    range.insertNode(text);
  }

  checkState(): void {
    const mark = this.api.selection.findParentTag(this.tag);

    this.state = !!mark;

    if (this.state) {
      this.showActions(mark as HTMLElement);
    } else {
      this.hideActions();
    }
  }

  renderActions(): HTMLElement {
    this.colorPicker = document.createElement('input');
    this.colorPicker.type = 'color';
    this.colorPicker.value = '#f5f1cc';
    this.colorPicker.hidden = true;

    return this.colorPicker;
  }

  showActions(mark: HTMLElement): void {
    const backgroundColor = mark.style.backgroundColor;
    this.colorPicker!.value = backgroundColor
      ? this.convertToHex(backgroundColor)
      : '#f5f1cc';

    this.colorPicker!.onchange = () => {
      mark.style.backgroundColor = this.colorPicker!.value;
    };
    this.colorPicker!.hidden = false;
  }

  hideActions(): void {
    if (this.colorPicker) {
      this.colorPicker.onchange = null;
      this.colorPicker.hidden = true;
    }
  }

  convertToHex(color: string): string {
    const rgb = color.match(/(\d+)/g);

    if (!rgb) return color;

    let hexr = parseInt(rgb[0]).toString(16);
    let hexg = parseInt(rgb[1]).toString(16);
    let hexb = parseInt(rgb[2]).toString(16);

    hexr = hexr.length === 1 ? '0' + hexr : hexr;
    hexg = hexg.length === 1 ? '0' + hexg : hexg;
    hexb = hexb.length === 1 ? '0' + hexb : hexb;

    return '#' + hexr + hexg + hexb;
  }
}
