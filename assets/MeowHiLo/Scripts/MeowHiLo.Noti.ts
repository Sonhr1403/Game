import { LanguageMgr } from "../../framework/localize/LanguageMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Noti extends cc.Component {
  public static instance: Noti = null;

  @property(cc.Label)
  private notiContent: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Noti.instance = this;
  }

  public openNoti(num: number) {
    let msg = "";
    switch (num) {
      case 0:
        msg = LanguageMgr.getString(".connection_error");
        break;
        
      case 1:
        msg = LanguageMgr.getString(".connection_error1");
        break;

      case 2:
        msg = LanguageMgr.getString(".connection_end");
        break;

      case 3:
        msg = LanguageMgr.getString(".not_enough_money");
        break;

      case 4:
        msg = LanguageMgr.getString(".spin_error");
        break;
    }

    if (!this.node.active) {
    // if (false) {
        this.node.active = true;
    }

    this.notiContent.string = msg;
  }
}
