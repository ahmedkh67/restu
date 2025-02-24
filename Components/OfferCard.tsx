import React from 'react'

type OfferCardParams = {
    title: string ,
    bio: string ,
    src: string | any ,
}

function OfferCard({title, bio, src }: OfferCardParams ){
  return (
    <>

        <div className="OfferCard_Container">
            <div className="OfferCard_Border">
                <div className="OfferCard_Image ">
                
                </div>
            </div>
            <h1 className="OfferCard_title">
                Pizza piporine
            </h1>
            <p className="OfferCard_bio">
                Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
            </p>
            <div className="OfferButtons_Container">
                <button className="OfferMore_Button">
                    ...
                </button>
                <button className="OfferOrder_Button">
                    Order now                 
                </button>
            </div>
        </div>

    </>
  )
}

export default OfferCard