import Controller from "./MeowHiLo.Controller";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FootBar extends cc.Component {
  public static instance: FootBar = null;

  @property(cc.Button)
  private btnStake: cc.Button[] = []; // 0: 1/2, 1: x2

  @property(cc.Label)
  private stakeNum: cc.Label = null;

  @property(cc.Node)
  private light: cc.Node = null;

  @property(cc.Node)
  private popUp: cc.Node = null;

  @property(cc.Node)
  private arrow: cc.Node = null;

  ///////////////////////////////////////////////////

  private popOn: boolean = true;

  onLoad() {
    FootBar.instance = this;

    this.popupGuide(true);
    this.schedule(this.runArrow, 0.32,cc.macro.REPEAT_FOREVER);
    this.startLight(true);
  }

  private stake: number = 1;

  public getStake() {
    return this.stake;
  }

  private onClickIncStake() {
    this.stake = this.stake * 2;
    this.updateBet();
    this.stopPopUp();
  }

  private onClickDecStake() {
    this.stake = Math.floor(this.stake / 2);
    this.updateBet();
    this.stopPopUp();
  }

  public updateBet() {
    if (this.stake > 1 && this.stake < 300) {
      this.setInteractable(0, true);
      this.setInteractable(1, true);
    } else if (this.stake === 1) {
      this.setInteractable(0, false);
      this.setInteractable(1, true);
    } else if (this.stake >= 300) {
      this.stake = 300;
      this.setInteractable(0, true);
      this.setInteractable(1, false);
    }

    this.updateStake();

    // if (num !== MoneyTrain2Controller.instance.getLocalBetAmount()) {
    //   SlotCmd.Send.sendSlotJoinGame(num);
    // }
  }

  private setInteractable(num: number, interactable: boolean){
    this.btnStake[num].interactable = interactable;
    if (interactable) {
      this.btnStake[num].node.children[0].children[0].opacity = 255;
    } else {
      this.btnStake[num].node.children[0].children[0].opacity = 140;
    }
  }

  private updateStake() {
    this.stakeNum.string = this.stake.toString();
  }

  public startLight(start: boolean) {
    if (start) {
      this.runLight()
      this.schedule(this.runLight, 0.6, cc.macro.REPEAT_FOREVER);
    } else {
      this.unschedule(this.runLight);
    }
  }

  private runLight() {
    cc.tween(this.light)
      .to(0.25, { opacity: 255 }, { easing: "" })
      .call(() => {
        cc.tween(this.light)
          .to(0.25, { opacity: 0 }, { easing: "" })
          .start();
      })
      .start();
  }

  private onClickConfirm() {
    this.stopPopUp();
    this.startLight(false);
    Controller.instance.startTimer(true);
  }

  public popupGuide(on: boolean) {
    this.popUp.active = on;
  }

  private runArrow(){
    cc.tween(this.arrow)
      .by(0.15, { position: cc.v3(0, 10, 0) })
      .call(() => {
        cc.tween(this.arrow)
          .by(0.15, { position: cc.v3(0, -10, 0) })
          .start();
      })
      .start();
  }

  private stopPopUp(){
    if (this.popOn) {
      this.popOn = false;
      this.unschedule(this.runArrow);
      this.popupGuide(false);
    }
  }
}
