import { SlotCmd } from "./Script.Cmd";
import Common from "./Script.Common";
import Controller from "./Script.Controller";
import SoundManager, { SLOT_SOUND_TYPE } from "./Script.Sound";
import NumericalHelper from "./Script.UINumericalHelper";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FootBar extends cc.Component {
  public static instance: FootBar = null;

  @property(cc.Node)
  private btnTurbo: cc.Node[] = []; // 0: off, 1: on

  @property(cc.Button)
  private btnBet: cc.Button[] = []; // 0: decrease, 1: increase

  @property(cc.Label)
  private totalBet: cc.Label = null;

  @property(cc.Node)
  private pnAutoSpin: cc.Node = null;

  @property(cc.Button)
  private btnAutoSpin: cc.Button = null;

  @property(cc.SpriteFrame)
  private autoSpinSF: cc.SpriteFrame[] = []; // 0: off, 1: on

  @property(cc.Node)
  private listSpinBtn: cc.Node[] = []; // 0: spin, 1: autoSpin

  @property(cc.Label)
  private lblAutoSpin: cc.Label = null;

  @property(cc.Button)
  private btnMaxBet: cc.Button = null;

  @property(cc.Label)
  private lblTotalWin: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    FootBar.instance = this;
  }

  private onClickSpin() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.SPINNINGSOUND);
    Controller.instance.reallySpin();
  }

  private onClickTurbo() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    Controller.instance.setIsTurbo(
      !Controller.instance.getIsTurbo()
    );
    this.updateTurbo();
  }

  public updateTurbo() {
    if (Controller.instance.getIsTurbo()) {
      this.btnTurbo[1].active = true;
      this.btnTurbo[0].getComponent(cc.Button).interactable = false;
      this.btnTurbo[1].getComponent(cc.Button).interactable = false;
      cc.tween(this.btnTurbo[0])
        .to(0.25, { opacity: 0 })
        .call(() => {
          cc.tween(this.btnTurbo[1])
            .to(0.25, { opacity: 255 })
            .call(() => {
              this.btnTurbo[0].getComponent(cc.Button).interactable = true;
              this.btnTurbo[1].getComponent(cc.Button).interactable = true;
              this.btnTurbo[0].active = false;
            })
            .start();
        })
        .start();
    } else {
      this.btnTurbo[0].active = true;
      this.btnTurbo[0].getComponent(cc.Button).interactable = false;
      this.btnTurbo[1].getComponent(cc.Button).interactable = false;
      cc.tween(this.btnTurbo[1])
        .to(0.25, { opacity: 0 })
        .call(() => {
          cc.tween(this.btnTurbo[0])
            .to(0.25, { opacity: 255 })
            .call(() => {
              this.btnTurbo[0].getComponent(cc.Button).interactable = true;
              this.btnTurbo[1].getComponent(cc.Button).interactable = true;
              this.btnTurbo[1].active = false;
            })
            .start();
        })
        .start();
    }
  }

  private onClickIncBet() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    Controller.instance.increaseBetOrdi();
    this.updateBet();
  }

  private onClickDecBet() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    Controller.instance.decreaseBetOrdi();
    this.updateBet();
  }

  public updateBet() {
    switch (Controller.instance.getBetOrdi()) {
      case 0:
        this.btnBet[0].interactable = false;
        this.btnBet[1].interactable = true;
        break;

      case 4:
        this.btnBet[0].interactable = true;
        this.btnBet[1].interactable = false;
        break;

      default:
        this.btnBet[0].interactable = true;
        this.btnBet[1].interactable = true;
        break;
    }
    let num = Controller.instance.getTotalBet();
    this.totalBet.string = Common.numberWithCommas(num);

    if (num !== Controller.instance.getLocalBetAmount()) {
      SlotCmd.Send.sendSlotJoinGame(num);
    }
  }

  private onClickMaxBet() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    if (Controller.instance.getBetOrdi() < 4) {
      Controller.instance.setBetOrdi(4);
      this.updateBet();
    }
  }

  public onClickAutoSpin() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    this.btnAutoSpin.interactable = false;
    if (!this.pnAutoSpin.active) {
      this.pnAutoSpin.active = true;
      cc.tween(this.pnAutoSpin)
        .to(0.25, { opacity: 255 })
        .call(() => {
          this.btnAutoSpin.interactable = true;
        })
        .start();
    } else {
      cc.tween(this.pnAutoSpin)
        .to(0.25, { opacity: 0 })
        .call(() => {
          this.btnAutoSpin.interactable = true;
          this.pnAutoSpin.active = false;
        })
        .start();
    }
  }

  public onClickChooseAutoSpin(event, id) {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    this.runAutoSpin(parseInt(id));
    this.onClickAutoSpin();
  }

  public runAutoSpin(num: number) {
    Controller.instance.setIAS(true);
    this.btnAutoSpin.node.children[0].getComponent(cc.Sprite).spriteFrame =
      this.autoSpinSF[1];
    cc.tween(this.listSpinBtn[0])
      .to(0.25, { opacity: 0 })
      .call(() => {
        this.listSpinBtn[0].active = false;
        this.listSpinBtn[1].active = true;
        cc.tween(this.listSpinBtn[1]).to(0.25, { opacity: 255 }).start();
      })
      .start();
    this.lblAutoSpin.string = num.toString();
    Controller.instance.reallySpin();
  }

  public onClickStopAutoSpin() {
    SoundManager.instance.playType(SLOT_SOUND_TYPE.BUTTON);
    this.btnAutoSpin.node.children[0].getComponent(cc.Sprite).spriteFrame =
      this.autoSpinSF[0];
    cc.tween(this.listSpinBtn[1])
      .to(0.25, { opacity: 0 })
      .call(() => {
        this.listSpinBtn[1].active = false;
        this.listSpinBtn[0].active = true;
        cc.tween(this.listSpinBtn[0]).to(0.25, { opacity: 255 }).start();
      })
      .start();
    Controller.instance.setIAS(false);
    this.lblAutoSpin.string = "";
  }

  public setBtnInteractive(bool: boolean) {
    this.setBetInteractable(bool);
    this.btnMaxBet.interactable = bool;
    this.btnAutoSpin.interactable = bool;
    this.listSpinBtn[0].getComponent(cc.Button).interactable = bool;
    if (this.pnAutoSpin.active) {
      cc.tween(this.pnAutoSpin)
        .to(0.25, { opacity: 0 })
        .call(() => {
          this.pnAutoSpin.active = false;
        })
        .start();
    }
  }

  private setBetInteractable(bool: boolean) {
    if (bool) {
      switch (Controller.instance.getBetOrdi()) {
        case 0:
          this.btnBet[0].interactable = false;
          this.btnBet[1].interactable = true;
          break;
        case 5:
          this.btnBet[0].interactable = true;
          this.btnBet[1].interactable = false;
          break;
        default:
          this.btnBet[0].interactable = true;
          this.btnBet[1].interactable = true;
          break;
      }
    } else {
      this.btnBet[0].interactable = false;
      this.btnBet[1].interactable = false;
    }
  }

  public getLblAutoSpin() {
    return parseInt(this.lblAutoSpin.string);
  }

  public decLblAutoSpin() {
    this.lblAutoSpin.string = (
      parseInt(this.lblAutoSpin.string) - 1
    ).toString();
  }

  public scheduleForLbl(winMoney: number, time: number) {
    NumericalHelper.scheduleForLabel(this.lblTotalWin, winMoney, time);
    SoundManager.instance.playLoop(SLOT_SOUND_TYPE.BOOKING_LOOG1);
    this.scheduleOnce(() => {
      SoundManager.instance.stopPlayLoop();
    }, time);
  }

  public openWinLbl() {
    cc.tween(this.lblTotalWin.node).stop();
    cc.tween(this.lblTotalWin.node).to(0.2, { opacity: 255 }).start();
  }

  public closeWinLbl() {
    cc.tween(this.lblTotalWin.node).stop();
    this.lblTotalWin.string = "";
    cc.tween(this.lblTotalWin.node).to(0.2, { opacity: 0 }).start();
  }

  public setWinLblTurbo(num) {
    this.lblTotalWin.node.opacity = 255;
    this.lblTotalWin.string = Common.numberWithCommas(num);
  }
}
