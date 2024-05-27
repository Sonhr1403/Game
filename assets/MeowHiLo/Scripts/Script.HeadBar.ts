
import Common from "./Script.Common";
import Controller from "./Script.Controller";
import Guide from "./Script.Guide";
import SoundManager, { SLOT_SOUND_TYPE } from "./Script.Sound";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HeadBar extends cc.Component {
  public static instance: HeadBar = null;

  @property(cc.Label)
  private lblBalance: cc.Label = null;

  @property(cc.Node)
  private menu: cc.Node = null;

  @property(cc.Button)
  private btnMenu: cc.Button = null;

  private currentBalance: number = 0;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    HeadBar.instance = this;
  }

  private onClickMenu() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    this.menu.active = !this.menu.active;
  }

  private onClickPayTable() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    Controller.instance.pnPayTable
      .getComponent(Guide)
      .onOpenPays();
    this.menu.active = false;
  }

  private onClickSetting() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    Controller.instance.pnSetting.active = true;
    this.menu.active = false;
  }

  public setCurrentBalance(num: number) {
    this.currentBalance = num;
    this.updateBalance();
  }

  public getCurrentBalance(): number {
    return this.currentBalance;
  }

  private updateBalance() {
    this.lblBalance.string = Common.numberWithCommas(
      this.currentBalance
    );
  }

  public decreaseBalance() {
    this.currentBalance -= Controller.instance.getTotalBet();
    this.updateBalance();
  }

  public increaseBalance(num: number) {
    this.currentBalance += num;
    this.updateBalance();
  }

  public setMenuInteractive(bool: boolean){
    this.btnMenu.interactable = bool;
  }
}
