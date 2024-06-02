const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
  public static instance: Menu = null;

  protected onLoad(): void {
    Menu.instance = this;
  }

  private onClickClose() {
    this.node.active = false;
  }

  public open() {
    this.node.active = true;
  }

  private onClickRules() {}

  private onClickTutorial() {}
}
