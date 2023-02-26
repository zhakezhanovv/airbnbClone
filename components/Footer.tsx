import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>People</p>
        <p>Hong Kong</p>
        <p>Kazakhstan</p>
        <p>Country</p>
        <p>Amazing</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Connect</p>
        <p>Chat</p>
        <p>Content</p>
        <p>Very nice</p>
        <p>I love you</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>JOIN</h5>
        <p>Work with us</p>
        <p>Come on</p>
        <p>No idea</p>
        <p>Help</p>
        <p>Engineering</p>
      </div>
    </div>
  )
}
