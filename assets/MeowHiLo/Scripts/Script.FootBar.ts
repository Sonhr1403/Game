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

  ///////////////////////////////////////////////////

  onLoad() {
    FootBar.instance = this;
  }

  private betOrdi: number = 3;

  private increaseStakeOrdi() {
    this.betOrdi += 1;
  }

  private decreaseStakeOrdi() {
    this.betOrdi -= 1;
  }

  private listBet: Array<number> = [10000, 20000, 30000, 50000, 100000];

  public getTotalStake() {
    return this.listBet[this.betOrdi];
  }

  private onClickIncStake() {
    this.increaseStakeOrdi();
    this.updateBet();
  }

  private onClickDecStake() {
    this.decreaseStakeOrdi();
    this.updateBet();
  }

  public updateBet() {
    switch (this.betOrdi) {
      case 0:
        this.btnStake[0].interactable = false;
        this.btnStake[1].interactable = true;
        break;

      case 4:
        this.btnStake[0].interactable = true;
        this.btnStake[1].interactable = false;
        break;

      default:
        this.btnStake[0].interactable = true;
        this.btnStake[1].interactable = true;
        break;
    }
    this.updateStake();

    // if (num !== MoneyTrain2Controller.instance.getLocalBetAmount()) {
    //   SlotCmd.Send.sendSlotJoinGame(num);
    // }
  }

  private updateStake() {
    this.stakeNum.string = this.listBet[this.betOrdi].toString();
  }

  public startLight(start: boolean) {
    if (start) {
      this.scheduleOnce(this.runLight, 2.2);
    } else {
      this.unschedule(this.runLight);
    }
  }

  private runLight() {
    cc.tween(this.light)
      .to(1, { opacity: 255 }, { easing: "smooth" })
      .call(() => {
        cc.tween(this.light)
          .to(1, { opacity: 0 }, { easing: "smooth" })
          .start();
      })
      .start();
  }

  private onClickConfirm(){
    
  }
}
