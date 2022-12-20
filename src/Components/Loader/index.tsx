import * as React from "react";
import { ILoader } from "./Loader";
import {HashLoader} from 'react-spinners'

const Loader: React.FunctionComponent<ILoader.IProps> = () => {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgb(17, 179, 44)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99
    }}>
        <HashLoader
          color="#eeeeee"
          size={80}
        />
    </div>
 );
}

export default Loader;