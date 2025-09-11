import React from 'react'
import Hero from '../components/Hero'
import ProductOverview from '../components/ProductOverview'
import ChartsSection from '../components/ChartsSection'
import DemoPreview from '../components/DemoPreview'
import Integration from '../components/Integration'
import PricingPlans from '../components/PricingPlans'
import CTA from '../components/CTA'


export default function HomePage(){
return (
<div>
<Hero />
<div className="">
<ProductOverview />
<ChartsSection />
<DemoPreview />
<Integration />
<PricingPlans />
<CTA />
</div>
</div>
)
}