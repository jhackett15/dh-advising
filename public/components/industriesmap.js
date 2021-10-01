import IndustriesCard from './industriescard'
import { industries } from './industriesdata'


const IndustriesMap = ({id, title, desc, imageURL}) => {
	return(
        <div className="grid grid-cols-2 gap-4">
		{
			industries.map((x , i) => {
		    return (
                <IndustriesCard 
                        key={i} 
                        id={industries[i].id} 
                        title={industries[i].title} 
                        desc={industries[i].desc}
                        
                    />
                    );
	        }
	        )}

        </div>
		)
}


export default IndustriesMap;