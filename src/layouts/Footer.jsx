import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer(){
return (
<footer className="bg-gray-50 mt-12">
<div className="container py-12 text-gray-600">
<div className="flex flex-col md:flex-row md:justify-between gap-6">
<div>
<h3 className="font-bold text-lg">Erphoria</h3>
<p className="text-sm">One platform to run your entire business.</p>
</div>
<div className="flex gap-8">
<div>
<h4 className="font-semibold">Product</h4>
<ul className="space-y-2 text-sm">
<li><Link to="/pricing">Pricing</Link></li>
<li><Link to="/demo">Demo</Link></li>
</ul>
</div>
<div>
<h4 className="font-semibold">Company</h4>
<ul className="space-y-2 text-sm">
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</div>
</div>
</div>


<div className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} Erphoria. All rights reserved.</div>
</div>
</footer>
)
}