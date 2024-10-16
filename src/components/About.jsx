import React from 'react'
import './About.css'

export default function About() {
  return (
    // <div className='flex md:flex justify-content-center mt-10 p-4'>
    //     <div className='flex-column align-items-center '>
    //         <h1>About EthiAi</h1>
    //         <p className=''>fgkgjf</p>
    //         <button className='text-black'>Read More</button>
    //     </div>
    //     <div>

    //     </div>
    // </div>   
    <div class="container">
        <h1 className='about-text'>About EthAi</h1>
        <p>At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders' movements.</p>
        <button class="read-more">Read more</button>
        
        <div class="features">
            <div class="feature">
                <h2>Stay Ahead</h2>
                <p>No more guesswork—get clear, trustable insights.</p>
            </div>
            <div class="feature">
                <h2>Know Your Assets</h2>
                <p>Always stay on top of how your investments are performing.</p>
            </div>
            <div class="feature">
                <h2>Simple, Not Overwhelming</h2>
                <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
            <div class="feature">
                <h2>Future-Proof</h2>
                <p>We're constantly improving, adding new features to help you make the most informed decisions possible.</p>
            </div>
        </div>
    </div>
  )
}
