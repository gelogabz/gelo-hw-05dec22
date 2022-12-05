import React from 'react'
import Card from './Card'
import mtnsill1 from '../assets/mtnsill1.jpg'
import mtnsill2 from '../assets/mtnsill2.jpg'
import mtnsill3 from '../assets/mtnsill3.jpg'
import mtnsill4 from '../assets/mtnsill4.jpg'

const AllCards = () => {
    return (
        <section>
            <Card img={mtnsill1} className="img-fluid" cardtitle="Hiking Gets You Fit" carddesc="Hiking provides an element of cross-training because it is both a cardio activity and strength trainer all at once." />
            <Card img={mtnsill2} className="img-fluid" cardtitle="Hiking Can Lower Health Risks" carddesc="Hitting the trail on a regular basis can keep your health in check and lower your risk of several health dangers." />
            <Card img={mtnsill3} className="img-fluid" cardtitle="Hiking Helps in Cancer Recovery" carddesc="Although it can’t be said that hiking cures cancer, it may be a positive asset to prevention and recovery." />
            <Card img={mtnsill4} className="img-fluid" cardtitle="Hiking Can Increase Brainpower" carddesc="Hiking as a form of exercise stimulates neurogenesis, which is the growth of new neurons." />
        </section>
    )
}

export default AllCards;