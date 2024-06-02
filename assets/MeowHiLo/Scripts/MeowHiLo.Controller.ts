import { LanguageMgr } from "../../framework/localize/LanguageMgr";
import { Cmd } from "./MeowHiLo.Cmd";
import Common from "./MeowHiLo.Common";
import { Connector } from "./MeowHiLo.Connector";
import FootBar from "./MeowHiLo.FootBar";
import HeadBar from "./MeowHiLo.HeadBar";
import Noti from "./MeowHiLo.Noti";

const { ccclass, property } = cc._decorator;

// export class STATE_OF_GAME {
//   static BET_STAKE = 0;
//   static RESULT = 1;
//   static CHOOSING = 2;
//   static END = 3;
// }

@ccclass
export default class Controller extends cc.Component {
  public static instance: Controller = null;

  @property(cc.Node)
  private pnGame: cc.Node = null;

  @property(cc.Node)
  private pnBar: cc.Node = null;

  @property(cc.Prefab)
  private prfSetting: cc.Prefab = null;

  @property(cc.Prefab)
  private prfFootBar: cc.Prefab = null;

  @property(cc.Prefab)
  private prfHeadBar: cc.Prefab = null;

  @property(cc.Prefab)
  private prfNoti: cc.Prefab = null;

  @property(cc.Prefab)
  private prfGuide: cc.Prefab = null;

  @property(cc.Button)
  private listBtn: cc.Button[] = [];

  @property(cc.SpriteFrame)
  private cardsSF: cc.SpriteFrame[] = [];

  @property(cc.Label)
  private timerLbl: cc.Label = null;

  @property(cc.Node)
  private timer_frame: cc.Node = null;

  @property(cc.Label)
  private cardsNum: cc.Label = null;

  //////////////////////////////////

  private pnNoti: cc.Node = null;
  private pnHeadBar: cc.Node = null;
  private pnFootBar: cc.Node = null;
  public pnSetting: cc.Node = null;
  public pnGuide: cc.Node = null;

  public _scheduler = null;
  public _isGameActive: boolean = true;
  private hideTime: number = null;

  public isMobile: boolean = false;

  public phase: number = 0;

  private skipLeft: number = 5;

  private result: number = -1;

  private timer: number = 180;

  private cardNum: number = 52;

  ///////////////////////////////////////////////////

  onLoad() {
    cc.debug.setDisplayStats(false);
    Controller.instance = this;
    // this.initNoti();

    this.isMobile = cc.sys.isMobile;

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_LOGIN,
      this.responseLogin,
      this
    );

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_GAME_INFO,
      this.responseReceiveSubscribeGame,
      this
    );

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_ROUND_RESULT,
      this.responseReceiveRoundResult,
      this
    );

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_BET_FAILED,
      this.responseReceiveBetFailed,
      this
    );

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_FREE_GAME_RESULT,
      this.responseFreeGame,
      this
    );

    Connector.instance.addCmdListener(
      Cmd.Cmd.CMD_OPEN_MINIGAME,
      this.responseMiniGame,
      this
    );

    // Connector.instance.connect();
  }

  onDestroy() {
    Connector.instance.disconnect();

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_LOGIN);

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_GAME_INFO);

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_ROUND_RESULT);

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_BET_FAILED);

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_FREE_GAME_RESULT);

    Connector.instance.removeCmdListener(this, Cmd.Cmd.CMD_OPEN_MINIGAME);

    cc.director.getScheduler().unscheduleUpdate(this);
  }

  protected start(): void {
    this.initHeadBar();
    this.initFootBar();
    // this.initSetting();
    // this.initPayTable();
    // this.initFreeGame();
    // this.initMusic();
    this.initFake();
    this.initNewGame();

    this._scheduler = window.setInterval(
      this.updateOffline.bind(this),
      1000 / 60
    );
    cc.game.on(cc.game.EVENT_SHOW, this._onShowGame, this);
    cc.game.on(cc.game.EVENT_HIDE, this._onHideGame, this);
  }

  ////////////////////////////////////////////////////////////////////Init Start
  private initMusic() {
    // localStorage.setItem("musicStatus", "true");
    // SoundManager.instance.playMusic(0);
  }

  private initSetting() {
    this.pnSetting = cc.instantiate(this.prfSetting);
    this.pnSetting.zIndex = 999;
    this.pnSetting.active = false;
    this.pnGame.addChild(this.pnSetting);
  }

  private initHeadBar() {
    this.pnHeadBar = cc.instantiate(this.prfHeadBar);
    this.pnHeadBar.zIndex = 999;
    this.pnHeadBar.active = true;
    this.pnBar.addChild(this.pnHeadBar);
  }

  private initFootBar() {
    this.pnFootBar = cc.instantiate(this.prfFootBar);
    this.pnFootBar.zIndex = 999;
    this.pnFootBar.active = true;
    this.pnBar.addChild(this.pnFootBar);
  }

  private initPayTable() {
    this.pnGuide = cc.instantiate(this.prfGuide);
    this.pnGuide.zIndex = 999;
    this.pnGuide.active = false;
    this.pnGame.addChild(this.pnGuide);
  }

  public initNoti() {
    this.pnNoti = cc.instantiate(this.prfNoti);
    this.pnNoti.zIndex = 999;
    this.pnNoti.active = true;
    this.pnGame.parent.addChild(this.pnNoti);
    this.pnNoti.active = false;
  }

  private initFake() {
    HeadBar.instance.setCurrentBalance(1000000);
    FootBar.instance.updateBet();
  }

  private initNewGame() {
    // this.phase = STATE_OF_GAME.BET_STAKE;
    for (let i = 0; i < 6; i++) {
      this.setInteractable(i, false);
    }
    this.cardNum = 52;
    this.updateCardNum();
  }

  public fakeData() {
    this.result = Common.getRandomNumber(0, 51);
  }

  /////////////////////////////////////////////////////////////////////////////Init End

  //////////////////////////////////////////////////////////////////////////Button Start

  private setInteractable(num: number, interactable: boolean) {
    this.listBtn[num].interactable = interactable;
    if (interactable) {
      this.listBtn[num].node.children[0].children.forEach((child) => {
        child.opacity = 255;
      });
    } else {
      this.listBtn[num].node.children[0].children.forEach((child) => {
        child.opacity = 140;
      });
    }
  }

  private onClickSkip() {}

  private onClickCashOut() {}

  private onClickRed() {}

  private onClickBlack() {}

  private onClickHigh() {}

  private onClickLow() {}

  /////////////////////////////////////////////////////////////////////////////Button End

  /////////////////////////////////////////////////////////////////////Response Start

  private showError(res) {
    let err = res.getError();
    if (err !== 0) {
      Common.runError({
        error: err,
      });
    }
  }

  private checkRes(name: string, cmdId: any, res: any) {
    Common.runError(
      name,
      new Date().toLocaleString() + " " + new Date().getMilliseconds(),
      cmdId,
      res
    );
  }

  private responseLogin(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveLogin();
    res.unpackData(data);
    this.checkRes("responseLogin", cmdId, res);
    this.showError(res);
    ////////////////////////////////////////////
    let err = res.getError();
    switch (err) {
      case 0:
        Cmd.Send.sendJoinGame(FootBar.instance.getStake());
        break;

      default:
        Noti.instance.openNoti(1);
        break;
    }
  }

  //   // 5002
  protected responseReceiveSubscribeGame(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveGameInfo();
    res.unpackData(data);
    this.checkRes("responseReceiveSubscribeGame", cmdId, res);
    this.showError(res);
    /////////////////////////
    HeadBar.instance.setCurrentBalance(res.currentMoney);
    // if (this.localBetAmount !== res.betAmount) {
    //   this.localBetAmount = res.betAmount;
    //   FootBar.instance.updateBet();
    // }

    if (res.isFreeGame) {
    }

    if (res.isMiniGame) {
    }
  }

  //   // 5004
  public localData: Cmd.ImpData = null;
  public localMini: Cmd.ImpMini = null;
  public localRes5004: Cmd.ReceiveRoundResult = null;

  protected responseReceiveRoundResult(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveRoundResult();
    res.unpackData(data);
    this.checkRes("responseReceiveRoundResult", cmdId, res);
    this.showError(res);
    ////////////////////////////////////////////

    if (res.getError() != 0) {
      Noti.instance.openNoti(4);
      return;
    }

    this.localRes5004 = res;
    this.localData = res.data;
  }

  //5005
  protected responseReceiveBetFailed(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveBetFailed();
    res.unpackData(data);
    this.checkRes("responseReceiveBetFailed", cmdId, res);
    this.showError(res);

    ////////////////////////////////////////////
    const error = res.getError();
    switch (error) {
      case 1:
        Common.runError("Can't deduct money");
        break;

      case 2:
        Common.runError("Free game available");
        break;

      case 3:
        Common.runError("Jackpot available");
        break;

      case 4:
        Common.runError("Mini game available");
        // this.sendMiniGame();
        break;
    }

    Noti.instance.openNoti(4);
  }

  //5008
  private responseFreeGame(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveFreeGame();
    res.unpackData(data);
    this.checkRes("responseFreeGame", cmdId, res);
    this.showError(res);

    /////////////////////////////////////////////////////////

    let err = res.getError();
    switch (err) {
      case 0:
        this.localData = res.data;
        break;

      case 1:
        Common.runError("No Free Game");
        break;

      default:
        Common.runError("Free Game Error:", err);
        break;
    }
  }

  //5010
  private responseMiniGame(cmdId: any, data: Uint8Array) {
    let res = new Cmd.ReceiveMiniGame();
    res.unpackData(data);
    this.checkRes("responseMiniGame", cmdId, res);
    this.showError(res);

    /////////////////////////////////////////////////////////

    switch (res.err) {
      case 0:
        this.localMini = res.miniGame;
        break;

      case 1:
        Common.runError("No Mini Game");
        break;

      default:
        Common.runError("Mini Game Error:", res.err);
        break;
    }
  }

  /////////////////////////////////////////////////////////////////////Response End

  ///////////////////////////////////////////////////////////// other function

  public startTimer(start: boolean) {
    if (start) {
      this.schedule(this.minusTimer, 1, cc.macro.REPEAT_FOREVER, -1);
    } else {
      this.unschedule(this.minusTimer);
    }
  }

  private minusTimer() {
    this.timer -= 1;
    this.showTimer();
    if (this.timer === 30) {
      this.timer_frame.active = true;
    }
    if (this.timer === 0) {
      this.startTimer(false);
    }
  }

  private showTimer() {
    let a = Math.floor(this.timer / 60);
    let b = this.timer % 60;
    if (b.toString().length === 1) {
      this.timerLbl.string = a + ":0" + b;
    } else {
      this.timerLbl.string = a + ":" + b;
    }
  }

  private updateCardNum(){
    this.cardsNum.string = this.cardNum.toString();
  }

  public sendBet() {
    Cmd.Send.sendBet(FootBar.instance.getStake());
  }

  public sendFreeGame() {
    Cmd.Send.sendStartFreeGame();
  }

  public sendMiniGame() {
    Cmd.Send.sendStartMiniGame();
  }

  public scheduleForLbl(
    start: number,
    to: number,
    time: number,
    lbl: cc.Label,
    isSchedule: boolean
  ) {
    let current = start;
    let totalProfit = to;
    let profitStep = (totalProfit - current) / 100;

    if (isSchedule) {
      this.unschedule(increaseLbl);
    } else {
      this.schedule(increaseLbl, time * 0.01);
    }
    function increaseLbl() {
      current += profitStep;
      if (current >= totalProfit) {
        this.unschedule(increaseLbl);
        lbl.string = Common.numberWithCommas(totalProfit);
      } else {
        lbl.string = Common.numberWithCommas(current);
      }
    }
  }

  /////////////////// DMZ /////////////////////////

  updateOffline() {
    if (!this._isGameActive) {
      if (cc.sys.isBrowser) {
        cc.director.mainLoop();
      }
    }
  }

  _onShowGame() {
    this._isGameActive = true;
    if (cc.sys.isNative && cc.sys.isMobile && this.hideTime) {
      let curTime = performance.now();
      let delta = (curTime - this.hideTime) / 1000;
      let itr = 0;
      while (itr < delta) {
        let dt = Math.min(0.1, delta - itr);
        cc.director.getScheduler().update(dt);
        itr += dt;
      }
      this.hideTime = null;
    } else {
      cc.game.resume();
    }
  }

  _onHideGame() {
    this._isGameActive = false;
    if (cc.sys.isNative && cc.sys.isMobile) {
      this.hideTime = performance.now();
    } else {
      cc.game.pause();
    }
  }

  ///////////////////////////////////////////
}
