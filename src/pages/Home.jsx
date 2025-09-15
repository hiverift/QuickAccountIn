import React from 'react'
import Hero from '../components/Hero'
import ProductOverview from '../components/ProductOverview'
import ChartsSection from '../components/ChartsSection'
import DemoPreview from '../components/DemoPreview'
import Integration from '../components/Integration'
import PricingPlans from '../components/PricingPlans'
import CTA from '../components/CTA'
import Subfooter from '../components/subfooter'



export default function HomePage(){
return (
<div className='overflow-x-hidden'>
<Hero />
<div className="">
<ProductOverview />
<ChartsSection />
<DemoPreview />
<Integration />
<PricingPlans />
<CTA />
<Subfooter/>
</div>
</div>
)
}