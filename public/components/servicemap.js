import ServiceCard from './servicecard'
import { services } from './servicesdata'

const ServicesMap = ({id, title, desc}) => {
	return(
        <div>
            <div className="">
		{
			services.map((x , i) => {
		    return (
                <ServiceCard 
                        key={i} 
                        id={services[i].id} 
                        title={services[i].title} 
                        desc={services[i].desc}
                        
                    />
                    );
	        }
	        )}

        </div>
        </div>
		)
}


export default ServicesMap;