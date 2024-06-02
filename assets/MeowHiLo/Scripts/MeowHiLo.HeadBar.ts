
import Common from "./MeowHiLo.Common";
import Controller from "./MeowHiLo.Controller";
import FootBar from "./MeowHiLo.FootBar";
import Guide from "./MeowHiLo.Guide";
import MeowHiLoSoundManager from "./MeowHiLo.Sound";
import SoundManager, { SLOT_SOUND_TYPE } from "./MeowHiLo.Sound";

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

  @property(cc.Sprite)
  private btnMute: cc.Sprite = null;

  @property(cc.SpriteFrame)
  private muteSF: cc.SpriteFrame[] = [];

  @property(cc.Node)
  private eyeNo: cc.Node = null;

  private currentBalance: number = 0;

  private isHide: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    HeadBar.instance = this;
  }

  private onClickMenu() {
    // SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    this.menu.active = !this.menu.active;
  }

  private onClickPayTable() {
    // SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    // Controller.instance.pnPayTable
    //   .getComponent(Guide)
    //   .onOpenPays();
    this.menu.active = false;
  }

  private onClickSetting() {
    // SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
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
    this.currentBalance -= FootBar.instance.getStake();
    this.updateBalance();
  }

  public increaseBalance(num: number) {
    this.currentBalance += num;
    this.updateBalance();
  }

  public setMenuInteractive(bool: boolean){
    this.btnMenu.interactable = bool;
  }

  private onClickHideMoney(){
    this.isHide = !this.isHide;
    if (this.isHide) {
      this.lblBalance.string = "";
      this.eyeNo.active = true;
    } else {
      this.updateBalance();
      this.eyeNo.active = false;
    }
  }

  private onClickMute(){
    SoundManager.instance.soundStatus = !SoundManager.instance.soundStatus;
    this.updateMute
  }

  private updateMute(status: boolean){
    if (status) {
      this.btnMute.spriteFrame = this.muteSF[0];
    } else {
      this.btnMute.spriteFrame = this.muteSF[1];
    }
  }
}
