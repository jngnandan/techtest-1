import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useContext } from 'react';
// import testData from '../../data.json'
import { ContentContext } from '../../context/ContentContext';
import TabItem from './tabItem';

export enum TableStyle {
    StyleOne = "bg-blue-300 text-dark-800",
    StyleTwo = "bg-dark-500 text-blue-500"
}

function Table({title, data, style}: {title: string, data: any, style: TableStyle}) {
    const {colorMode} = useContext(ContentContext)

    const {priceBands, tiers} = data
    console.log(style)

    const eastLevelOne = tiers.filter(eachitem => eachitem.tier === 'East Level 1')
    const eastLevelTwo = tiers.filter(eachitem => eachitem.tier === 'East Level 2')
    const eastLevelThree = tiers.filter(eachitem => eachitem.tier === 'East Level 3')
    const ColinBellLevelOne = tiers.filter(eachitem => eachitem.tier == 'Colin Bell Level 1')
    const ColinBellLevelTwo = tiers.filter(eachitem => eachitem.tier == 'Colin Bell Level 2')
 
    // const pricesOne = eastLevelOne.map(eachitem => eachitem.prices)
    // console.log(pricesOne.map(eachitem => eachitem))
    


    return (
        <div className=''>
            <h2 className='text-center font-semibold py-4'>{title.toUpperCase()}</h2>
            <table className={`table table--${style} w-full text-small bg-white`}>
                    <tr className='grid grid-cols-4 gap-2 lg:gap-4 py-4 text-center w-full shadow-md bg-sky-100 border-y border-blue-300'>
                        {priceBands.map(tabHeading => 
                            <th>{tabHeading}</th>
                        )}
                        
                    </tr>

                    <tr className='py-3 text-center w-full'>
                        {eastLevelOne.map(tabData => {
                            return(
                                <div>
                                  {TabItem(tabData)}
                                </div>
                            )
                        })}
                    </tr>

                    <tr className='py-3 text-center w-full'>
                        {eastLevelTwo.map(tabData => {
                            return(
                                <div>
                                  {TabItem(tabData)}
                                </div>
                            )
                        })}
                    </tr>

                    <tr className='py-3 text-center w-full'>
                        {eastLevelThree.map(tabData => {
                            return(
                                <div>
                                    {TabItem(tabData)}
                                </div>
                            )
                        })}
                    </tr>

                    <tr className='py-3 text-center w-full'>
                        {ColinBellLevelOne.map(tabData => {
                            return(
                                <div>
                                    {TabItem(tabData)}
                                </div>
                            )
                        })}
                    </tr>

                    <tr className='py-3 text-center w-full'>
                        {ColinBellLevelTwo.map(tabData => {
                            return(
                                <div>
                                    {TabItem(tabData)}
                                </div>
                            )
                        })}
                    </tr>
            </table>
            
        </div>
    );
}

export default Table;
