
let cb: Action
let mycb: Action
let e        = ""
let param    = ""
let initPin = -1

//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace IR{
  
    export class Packeta {
        public mye: string;
        public myparam: string;
    }
    

    //% advanced=true shim=IR::init
    function init(pin: Pins):void{
        return
    }
    //% advanced=true shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton,body: Action):void{
        return
    }

    //% blockId=ir_init2
    //% block="connect ir receiver to pin %pin"
    export function init2(pin: Pins): void{
        initPin=pin
        init(pin)
        
    }
      
    //% blockId=ir_received_left_event2
    //% block="on |%btn| button pressed"
    export function onPressEvent2(btn: RemoteButton, body: Action): void{
        onPressEvent(btn,body)
    }
  
  
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=obloq_mqttCallbackUser block="on obloq received"
    export function obloq_mqttCallbackUser(cb: (packet: Packeta) => void) {
        onPressEvent(0,packet)
        //onPressEvent(0,packet)
    }
    
    function obloq_mqttCallback(a: Action): void{
        cb = a
    }
    
    //% advanced=true shim=IR::obloqforevers
    function obloqforevers(a: Action): void {
        return
    }
  
}


















