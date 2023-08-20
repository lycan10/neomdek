import React from 'react'

const cardData=[
    {
        id: 0,
        figure: '500',
        title: 'Revenue',
        stuff: '+12.5%',
        content: 'Last 30 Days'
    },
    {
        id: 1,
        figure: '300',
        title: '',
        stuff: '+12.5%',
        content: 'Gross Margin'
    },
    {
        id: 2,
        figure: '20',
        title: 'ROI',
        stuff: '-12.5%',
        content: 'For Vehicle'
    },
    {
        id: 3,
        figure: '500m',
        title: 'Avg. Rental Rate',
        stuff: '+12.5%',
        content: 'Accross fleets'
    },
    {
        id: 4,
        figure: '300m',
        title: 'Annual',
        stuff: '+12.85',
        content: 'Gain'
    },
    {
        id: 5,
        figure: '70m',
        title: 'Total',
        stuff: '+1.8%',
        content: 'Pipeline'
    },
]

function getItemBackgroundColor(figure) {
    // Extract the numeric part from the figure string
    const numericFigure = parseFloat(figure);
  
    if (!isNaN(numericFigure)) { // Check if it's a valid number
      if (numericFigure < 40) {
        return 'red';
      } else if (numericFigure >= 40 && numericFigure <= 70) {
        return 'orange';
      } else {
        return 'green';
      }
    }
    return 'transparent'; // Default color
  }
  
  

const Cards = () => {
  return (
    <div className='cards'>
        {
            cardData.map((item)=>{
                return(
                    <div key={item.id} className='card-container' style={{ backgroundColor: getItemBackgroundColor(item.figure) }}>
                        <h1>${item.figure}</h1>
                        <div className='card-bottom'>
                            <div className='card-stuff'><p>{item.stuff}</p></div>
                            <div className='card-text'>
                            <p>{item.title}</p>
                            <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div style={{padding:'8px 8px 8px 0'}}> 
            <div style={{backgroundColor: 'green', borderBottom:'2px solid #C8C6C6', padding:'1px 6px', borderTopRightRadius:'12px'}}>
                <p style={{margin: '0'}}>$70m - $100m (High)</p>
            </div>
            <div style={{backgroundColor: 'orange', borderBottom:'2px solid #C8C6C6', padding:'1px 6px'}}>
                <p style={{margin: '0'}}>$40m - $70m (Mid)</p>
            </div>
            <div style={{backgroundColor: 'red', borderBottom:'2px solid #C8C6C6', padding:'1px 6px', borderBottomRightRadius:'12px'}}>
                <p style={{margin: '0'}}>$0m - $40m (Low)</p>
            </div>
        </div>
    </div>
  )
}

export default Cards
