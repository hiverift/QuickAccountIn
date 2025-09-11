import React from 'react'
import PricingPlans from '../components/PricingPlans'


export default function Pricing(){
return (
<div className="container py-20">
<h1 className="text-3xl font-semibold mb-6">Flexible Plans for Every Stage</h1>
<p className="text-gray-600 mb-8">Choose a plan that fits your business.</p>
<PricingPlans />
</div>
)
}