import React from 'react'
import SideMenu from './sidemenu/sidemenu'
import Body from './body/body'

const Container = () => {
  return (
    <div className='flex m-auto h-[90vh] items-center justify-center w-[85vw] my-10 rounded-xl overflow-hidden'>
        <SideMenu/>
        <Body/>
    </div>
  )
}

export default Container