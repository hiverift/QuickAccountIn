import React, {useState} from 'react'


export default function Contact(){
const [form,setForm] = useState({name:'',email:'',message:''})
const submit = (e)=>{e.preventDefault(); alert('Submitted — in a real app you would POST to an API')}
return (
<div className="container py-20 max-w-2xl">
<h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
<form onSubmit={submit} className="space-y-4">
<input required className="w-full p-3 border rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
<input required className="w-full p-3 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
<textarea required className="w-full p-3 border rounded" rows={6} placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
<button className="px-6 py-3 bg-primary text-white rounded">Send Message</button>
</form>
</div>
)
}