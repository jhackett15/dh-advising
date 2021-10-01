
import ServicesMap from './servicemap'
import IndustriesMap from './industriesmap'
import { useState } from 'react'


export default function ServicesAndIndustriesCard() {
const [value, setValue] = useState();

    return(
<div>
        <h1 className={styles.title}>
        <a onClick={() => setValue(1)} value={1}>Services </a> 
        | 
        <a onClick={() => setValue(2)} value={2}> Industries</a>
         </h1>

         <div>
            {   
               value === 2 ? 
                  <IndustriesMap /> :
                  <ServicesMap />
            }
         </div>

         </div>
    )
}
