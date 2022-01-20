import {ContainerSwitch, DescriptionSwitch} from './styles';
import React, { useState } from "react";
import Switch from "react-switch";
    
function BotaoSwitch({label}){  
    
    const [statusSwitch, setMudarStatus] = useState(false);      
      
    function handleChange(checked) {
        setMudarStatus(checked);    
        //console.log(statusSwitch);
    }
    return(        
        <ContainerSwitch>
            <DescriptionSwitch>{label}</DescriptionSwitch>
            <Switch onChange={handleChange} checked={statusSwitch} />
        </ContainerSwitch>
    )    
}

export default BotaoSwitch;