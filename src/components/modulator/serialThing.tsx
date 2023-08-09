import React, { useState } from "react";
import Button from "../ui/Button";

//code addapted form https://github.com/GoogleChromeLabs/serial-terminal


type Props={
    addComp: (idComp: string) => void;
}


declare class PortOption extends HTMLOptionElement {
    port: SerialPort;
}

const SerialThing: React.FC<Props> = ({addComp}) => {
    const [conButtonText, setConButtonText] = useState("Connect");

    let port : SerialPort  |undefined;
    let reader: ReadableStreamDefaultReader | ReadableStreamBYOBReader | undefined;

   
    const bufferSize = 8 * 1024; // 8kB

    const serial = navigator.serial;
    //const ports: (SerialPort)[] = await serial.getPorts();
    const ports: (SerialPort)[] = [];
    
    async function getSelectedPort(): Promise<void> {
        try{
            const serial = navigator.serial;
            port = await serial.requestPort({});
        }catch(e){
            return;
        }

    }

    async function connectToPort() {
        await getSelectedPort();
        if(!port){
            return;
        }

        const options = {
            baudRate: 9600,
        }

        try{
            await port.open(options);
            setConButtonText("Disconnect");
        }catch(e){
            console.error(e)
            setConButtonText("Connect");
            return;
        }

        while(port && port.readable){
            try{
                try{
                    reader = port.readable.getReader({mode: 'byob'});
                }catch{
                    reader = port.readable.getReader();
                }

                let buffer = null;
                for(;;){
                    const {value, done} = await (async ()=>{
                        if(reader instanceof ReadableStreamBYOBReader) {
                            if(!buffer){
                                buffer = new ArrayBuffer(bufferSize);
                            }
                            const {value, done} = await reader.read(new Uint8Array(buffer, 0, bufferSize));
                            buffer = value?.buffer;
                            return {value, done};
                        }else{
                            return await reader.read();
                        }
                    })();

                    if(value){
                        const tempString = new TextDecoder().decode(value);
                        await addComp(tempString);
                    }
                    if(done){
                        break;
                    }
                }
            }catch(e){
                console.error(e);
    
            }finally{
                if(reader){
                    reader.releaseLock();
                    reader = undefined;
                }
            }
        }

        if(port){
            try{
                await port.close();
            }catch(e){
                console.error(e);
            }
            setConButtonText("Connect");
        }
    }


    async function disconnectFromPort(): Promise<void> {
        const localPort = port;
        port = undefined;
        if(reader) {
            await reader.cancel();
        }

        if(localPort){
            try{
                await localPort.close();
            }catch(e){
                console.error(e);
            }
        }
        setConButtonText("Connect");
    }

    const connectBtnClick =async () => {
        if(port){
            await disconnectFromPort();
        }else{
            await connectToPort();
        }
    }

    return(
        <span>
            <Button onClick={connectBtnClick}>{conButtonText}</Button>
            <Button onClick={disconnectFromPort}>Disconnect</Button>
        </span>
    );
}


export default SerialThing;
