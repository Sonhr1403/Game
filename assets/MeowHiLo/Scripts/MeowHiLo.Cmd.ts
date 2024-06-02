import { Connector } from "./MeowHiLo.Connector";

export namespace Cmd {
  export interface ImpData {
    betAmount: number;
    rateRed: number;
    rateBlack: number;
    rateHigher: number;
    rateLower: number;
    currentCardId: number;
    currentUserMoney: number;
  }

  export interface ImpHistory {
    cardID: number;
    type: number;
    multiple: number;
  }

  /////////////////////////////////
  export class Cmd {
    static CMD_LOGIN = 1;
    static CMD_LOGOUT = 2;
    static CMD_DISCONNECTED = 37;
    static CMD_JOIN_ROOM = 5001;
    static CMD_GAME_INFO = 5002;
    static CMD_5003 = 5003;
    static CMD_ROUND_RESULT = 5004;
    static CMD_SEND_TIME = 5005;
    static CMD_SKIP_BET = 5006;
    static CMD_CASH_OUT = 5007;
    static CMD_SEND_HISTORY = 5008;
    static CMD_CONFIRM_JOIN_ROOM = 5009;
  }

  export class DEFINE_CHARACTER {
    static CLUBS_ACE = 0;
    static CLUBS_TWO = 1;
    static CLUBS_THREE = 2;
    static CLUBS_FOUR = 3;
    static CLUBS_FIVE = 4;
    static CLUBS_SIX = 5;
    static CLUBS_SEVEN = 6;
    static CLUBS_EIGHT = 7;
    static CLUBS_NINE = 8;
    static CLUBS_TEN = 9;
    static CLUBS_JACK = 10;
    static CLUBS_QUEEN = 11;
    static CLUBS_KING = 12;
    static DIAMONDS_ACE = 13;
    static DIAMONDS_TWO = 14;
    static DIAMONDS_THREE = 15;
    static DIAMONDS_FOUR = 16;
    static DIAMONDS_FIVE = 17;
    static DIAMONDS_SIX = 18;
    static DIAMONDS_SEVEN = 19;
    static DIAMONDS_EIGHT = 20;
    static DIAMONDS_NINE = 21;
    static DIAMONDS_TEN = 22;
    static DIAMONDS_JACK = 23;
    static DIAMONDS_QUEEN = 24;
    static DIAMONDS_KING = 25;
    static HEARTS_ACE = 26;
    static HEARTS_TWO = 27;
    static HEARTS_THREE = 28;
    static HEARTS_FOUR = 29;
    static HEARTS_FIVE = 30;
    static HEARTS_SIX = 31;
    static HEARTS_SEVEN = 32;
    static HEARTS_EIGHT = 33;
    static HEARTS_NINE = 34;
    static HEARTS_TEN = 35;
    static HEARTS_JACK = 36;
    static HEARTS_QUEEN = 37;
    static HEARTS_KING = 38;
    static SPADES_ACE = 39;
    static SPADES_TWO = 40;
    static SPADES_THREE = 41;
    static SPADES_FOUR = 42;
    static SPADES_FIVE = 43;
    static SPADES_SIX = 44;
    static SPADES_SEVEN = 45;
    static SPADES_EIGHT = 46;
    static SPADES_NINE = 47;
    static SPADES_TEN = 48;
    static SPADES_JACK = 49;
    static SPADES_QUEEN = 50;
    static SPADES_KING = 51;
  }

  export class ReceiveLogin extends BGUI.BaseInPacket {
    protected unpack(): void {}
  }

  //5002
  export class ReceiveGameInfo extends BGUI.BaseInPacket {
    public data: ImpData = {
      betAmount: -1,
      rateRed: -1,
      rateBlack: -1,
      rateHigher: -1,
      rateLower: -1,
      currentCardId: -1,
      currentUserMoney: -1,
    };

    protected unpack(): void {
      this.data.betAmount = this.getLong();
      this.data.rateRed = this.getLong();
      this.data.rateBlack = this.getLong();
      this.data.rateHigher = this.getLong();
      this.data.rateLower = this.getLong();
      this.data.currentCardId = this.getInt();
      this.data.currentUserMoney = this.getLong();
    }
  }

  //5004
  export class ReceiveRoundResult extends BGUI.BaseInPacket {
    public data: ImpData = {
      betAmount: -1,
      rateRed: -1,
      rateBlack: -1,
      rateHigher: -1,
      rateLower: -1,
      currentCardId: -1,
      currentUserMoney: -1,
    };

    protected unpack(): void {
      if (this.getError() != 0) {
        return;
      }

      this.data.betAmount = this.getLong();
      this.data.rateRed = this.getLong();
      this.data.rateBlack = this.getLong();
      this.data.rateHigher = this.getLong();
      this.data.rateLower = this.getLong();
      this.data.currentCardId = this.getInt();
      this.data.currentUserMoney = this.getLong();
    }
  }

  //5005
  export class ReceiveTime extends BGUI.BaseInPacket {
    public err: number = -1;
    public time: number = -1;

    protected unpack(): void {
      this.err = this.getError();
      if (this.err !== 0) {
        return;
      }

      this.time = this.getInt();
    }
  }

  //5008
  export class ReceiveHistory extends BGUI.BaseInPacket {
    public listSize: number = -1;
    public list: ImpHistory[] = [];

    protected unpack(): void {
      if (this.getError() != 0) {
        return;
      }

      this.listSize = this.getByte();
      for (let i = 0; i < this.listSize; i++) {
        let history: ImpHistory = {
          cardID: this.getInt(),
          /***
           * 0: RED
           * 1: BLACK
           * 2: HIGHER
           * 3: LOWER
           */
          type: this.getByte(),
          multiple: this.getDouble(),
        };
        this.list.push(history);
      }
    }
  }

  export class Send {
    //5001
    public static sendJoinGame(betAmount = 0) {
      let pk = new SendJoinGame();
      pk.betAmount = betAmount;
      cc.error(pk);
      Connector.instance.sendPacket(pk);
    }

    //5004
    public static sendBet(betAmount: number) {
      let pk = new SendBet();
      pk.betAmount = betAmount;
      Connector.instance.sendPacket(pk);
    }

    //5006
    public static skipBet(betAmount: number) {
      let pk = new SendBet();
      pk.betAmount = betAmount;
      Connector.instance.sendPacket(pk);
    }

    //5007
    public static cashOut(betAmount: number) {
      let pk = new SendBet();
      pk.betAmount = betAmount;
      Connector.instance.sendPacket(pk);
    }
  }

  //5001
  export class SendJoinGame extends BGUI.BaseOutPacket {
    public betAmount: number;
    getCmdId(): number {
      return Cmd.CMD_JOIN_ROOM;
    }
    putData(): void {
      this.putInt(this.betAmount);
    }
  }

  //5004
  export class SendBet extends BGUI.BaseOutPacket {
    public betAmount: number;
    getCmdId(): number {
      return Cmd.CMD_ROUND_RESULT;
    }
    putData(): void {
      this.putInt(this.betAmount);
    }
  }

  //5006
  export class SkipBet extends BGUI.BaseOutPacket {
    public betAmount: number;
    getCmdId(): number {
      return Cmd.CMD_SKIP_BET;
    }
    putData(): void {
      this.putInt(this.betAmount);
    }
  }

  //5007
  export class cashOut extends BGUI.BaseOutPacket {
    public betAmount: number;
    getCmdId(): number {
      return Cmd.CMD_CASH_OUT;
    }
    putData(): void {
      this.putInt(this.betAmount);
    }
  }


  //////////////////////////////////////////////////////////
}
