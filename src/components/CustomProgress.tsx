import { useEffect, useState } from "react";
import { ButtonGroup,Button} from "@material-tailwind/react";
export default function CustomProgress(value:any){
    
    const getStepBackgroundColor = (_current: number) => {
		let _color = "#e2e8f0";
		if (_current <= value.progress) {
			_color = "#54ba4a";
		} else if (_current - 20 <= value.progress) {
			_color = "#f6a722";
		};console.log(_color,"color")
		return _color;
	}

	const getStepColor = (_current: number) => {
		let _color;
		if ((_current <= value.progress) || (_current - 20 <= value.progress)) {
			_color = 'white';
		} else if (_current === value.progress) {
			_color = "black";
		};
		return _color;
	}
    return (
            <ButtonGroup>
                {
                    Array(5).fill(0).map((i,k)=>
                        <Button className={`text-${getStepColor((k+1) * 20)} ${(k+1)==5?"rounded-e-lg":""} px-3 py-2`} style={{backgroundColor:getStepBackgroundColor((k+1) * 20)}}>
                            {(k + 1) * 20}%
                        </Button>
                    )
                }
            </ButtonGroup>
    );
}