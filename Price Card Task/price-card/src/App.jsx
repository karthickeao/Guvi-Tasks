import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div class="wrapper">
    <div class="table basic">
      <div class="head">FREE</div>
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                     <span class="price"><b>$0/month</b></span>
                </div>
            </div>
        </div>
    
        <div class="features">
        
        <ul class="list-unstyled">
        
			<li class="mb-4"><span class="tick">✓</span> Single User</li>
			<li class="mb-4"><span class="tick">✓</span> 50GB Storage</li>
      <li class="mb-4"><span class="tick">✓</span>Unlimited Public Projects</li>
			<li class="mb-4"><span class="tick">✓</span>Community Access</li>
      <li class="mb-4"><span class="cross">✗</span><span class="light"> Unlimited Private Projects</span></li>
			<li class="mb-4"><span class="cross">✗</span><span class="light">Dedicated Phone Support</span></li>
      <li class="mb-4"><span class="cross">✗</span><span class="light"> Free Subdomain</span></li>
			<li class="mb-4"><span class="cross">✗</span><span class="light"> Monthly Status Reports</span></li>
           </ul>
         <div class="btn"><button>Button</button></div>
        </div>
        </div>
    <div class="table Premium">
    <div class="head">PLUS</div>
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                    <span class="price"><b>$9/month</b></span>
                </div>
            </div>
        </div>
      
        <div class="features">
        <ul class="list-unstyled">
			<li class="mb-4"><span class="tick">✓</span>5 Users</li>
			<li class="mb-4"><span class="tick">✓</span>50GB Storage</li>
      <li class="mb-4"><span class="tick">✓</span>Unlimited Public Projects</li>
			<li class="mb-4"><span class="tick">✓</span>Community Access</li>
      <li class="mb-4"><span class="tick">✓</span> Unlimited Private Projects</li>
      <li class="mb-4"><span class="tick">✓</span>  Dedicated Phone Support</li>
			<li class="mb-4"><span class="tick">✓</span> Free Subdomain</li>
      <li class="mb-4"><span class="cross">✗</span><span class="light"> Monthly Status Reports</span></li>
            </ul>
            <div class="btn"><button>Button</button></div>
        </div>
    </div>
    <div class="table Ultimate">
    <div class="head">PRO</div>
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                    <span class="price" ><b>$49/month</b></span>
                </div>
            </div>
        </div>
      
        <div class="features">
        <ul class="list-unstyled">
			<li class="mb-4"><span class="tick">✓</span>Unlimited Users</li>
			<li class="mb-4"><span class="tick">✓</span> 50GB Storage</li>
      <li class="mb-4"><span class="tick">✓</span> Unlimited Public Projects</li>
			<li class="mb-4"><span class="tick">✓</span> Community Access</li>
      <li class="mb-4"><span class="tick">✓</span>Unlimited Private Projects</li>
      <li class="mb-4"><span class="tick">✓</span> Dedicated Phone Support</li>
			<li class="mb-4"><span class="tick">✓</span> Free Subdomain</li>
      <li class="mb-4"><span class="tick">✓</span> Monthly Status Reports</li>
            </ul>
            <div class="btn"><button>Button</button></div>
        </div>
    </div>
</div>

    </>
  )
}

export default App