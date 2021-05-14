
import CardSocial from './CardSocial';

import CardContentServices from './CardContentServices';

function CardProducts({mockData2}) {
  
    return (
      <div
        className="flex w-full min-h-screen justify-center items-center"
        style={{
          backgroundImage: `url("/linen3.jpg")`,
        }}
      >
        <div className="flex md:flex-grow flex-col justify-between space-y-8">
          <CardContentServices mockData2={mockData2} />
          <CardSocial />
        </div>
      </div>
    );
}

export default CardProducts
