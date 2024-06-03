// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Rules extends cc.Component {

    @property(cc.Node)
    private listContents: cc.Node[] = [];

    @property(cc.ScrollView)
    private scrollView: cc.ScrollView = null;

    /////////////////////////////////////////

    private currentRule: number = 0;

    ///////////////////////////////////////////

    private onClickRule(event, id: string){
        curr
    }
}
