import React from 'react';

const Section = ({tittle,items}) => {
    const itemArray=items.map(item=><li>{item}</li>)
    return (
        <div>
           <section>
            <h3>{tittle}</h3>
            <ul>
              {itemArray}
            </ul>
                </section>  
        </div>
    );
};

export default Section;