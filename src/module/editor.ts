import { Blueprint } from './blueprint';
import { TEMPLATES_FOLDER } from './util/constants';

export class BlueprintEditor extends Application {
  activeBlueprint?: Blueprint;
  context?: CanvasRenderingContext2D;

  constructor() {
    super({ template: `${TEMPLATES_FOLDER}/editor.hbs` });
  }

  refresh() {
    if (!this.context) {
      throw new Error('failed to get canvas context');
    }
    if (this.activeBlueprint) {
      this.activeBlueprint.render(this.context);
    }
  }

  activateListeners(html: JQuery<HTMLElement>): void {
    const editorCanvas = document.getElementById('blueprintEditorCanvas') as any;
    this.context = editorCanvas.getContext('2d');
    if (!this.context) {
      throw new Error('failed to get canvas context');
    }
    this.activeBlueprint = new Blueprint();
    this.refresh();
  }
}
