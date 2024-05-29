import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './page/List/List'
import Add from './page/Add/Add'
import Order from './page/Order/Order'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className='app_content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/order' element={<Order />} />

        </Routes>
      </div>
    </div>
  )
}

export default App