import { ConnectData } from "./Script.ConnectData";
import Common from "./Script.Common";
import Noti from "./Script.Noti";

const { ccclass, property } = cc._decorator;

class LoginByUrl extends BGUI.BaseOutPacket {
  public partner: string;
  public accessToken: string;
  public appId: number;
  public lang: string;

  public getCmdId(): number {
    return 1;
  }

  public putData(): void {
    this.putString(this.partner);
    this.putString(this.accessToken);
    this.putInt(this.appId);
    this.putString(this.lang);
  }
}

class LoginByPortal extends BGUI.BaseOutPacket {
  public partner: string;
  // public game: string;
  public lang: string;
  public accessToken: string;
  public appId: number;

  public getCmdId(): number {
    return 1;
  }

  public putData(): void {
    this.putString(this.partner);
    // this.putString(this.game);
    this.putString(this.lang);
    this.putString(this.accessToken);
    this.putInt(this.appId);
  }
}

@ccclass
export class Connector extends BGUI.Connector {
  public static get instance(): Connector {
    let ret = cc.Canvas.instance.node.getComponent(Connector);
    if (!ret) {
      ret = cc.Canvas.instance.node.addComponent(Connector);
      const url = window.location.href;
      let urlSearchParams = new URLSearchParams(url.split("?")[1]);
      if (
        url &&
        url.includes("?") &&
        urlSearchParams &&
        urlSearchParams.get("accessToken")
      ) {
        if (window.location.host.includes("localhost:")) {
          Connector.instance.HOST =
            "slot-money-train-global-boss.wiwatech.com/ws-slot-money-train" +
            "/ws-slot-money-train";
        } else {
          Connector.instance.HOST =
            window.location.host + "/ws-slot-money-train";
        }
      } else {
        if (window.location.host.includes("localhost:")) {
          Connector.instance.HOST = ConnectData.CURRENT_DOMAIN;
          Connector.instance.PORT = ConnectData.CURRENT_PORT;
        } else {
          Noti.instance.openNoti(1);
        }
      }
    }
    return ret;
  }

  onDisconnected(code) {
    super.onDisconnected(code);
    Noti.instance.openNoti(2);
  }

  onFinishConnect(success: boolean) {
    super.onFinishConnect(success);
    Common.runError("Connector", success);
    if (success) {
      this.sendLogin();
      this.schedule(this.rewindDisconnectDetector);
    } else {
      Noti.instance.openNoti(1);
      this.unschedule(this.rewindDisconnectDetector);
    }
  }

  private sendLogin(): void {
    try {
      const url = window.location.href;
      let urlSearchParams = new URLSearchParams(url.split("?")[1]);

      if (
        url &&
        url.includes("?") &&
        urlSearchParams &&
        urlSearchParams.get("accessToken")
      ) {
        let pk = new LoginByUrl();
        pk.partner = urlSearchParams.get("partner");
        pk.accessToken = urlSearchParams.get("accessToken");
        pk.appId = 11;
        pk.lang = urlSearchParams.get("lang");
        if (!pk.lang || pk.lang === "") {
          pk.lang = "en";
        }
        Connector.instance.sendPacket(pk);
        Common.runError("sendLogin URL--->", pk);
      } else {
        let pk = new LoginByPortal();
        pk.partner = ConnectData.PARTNER;
        pk.accessToken = ConnectData.TOKEN;
        // pk.game = ConnectData.GAME;
        pk.lang = "en";
        pk.appId = 11;
        Connector.instance.sendPacket(pk);
        Common.runError("sendLogin test--->", pk);
      }
    } catch (error) {
      Noti.instance.openNoti(1);
    }
  }

  sendPacket(pk: BGUI.BaseOutPacket): void {
    if (this.isConnected()) {
      super.sendPacket(pk);
    } else {
      this.connect();
    }
  }
}

class SendLogin extends BGUI.BaseOutPacket {
  public nickName: string;
  public accessToken: string;

  public getCmdId(): number {
    return 1;
  }

  public putData(): void {
    this.putString(this.nickName);
    this.putString(this.accessToken);
  }
}
