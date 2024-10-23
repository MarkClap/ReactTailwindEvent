import './index.css'
import tweek from './assets/img/t&cweek.png'
import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'

export default function Nav(){
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-5 px-6 bg-cyan-200 shadow sm:items-baseline w-full">
  <div className="sm:mb-0">
  <a href="#" className="">LOGO</a>
  </div>
  <div className="mb-2 sm:mb-0">
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6">Eventos</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6">Cronograma</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6">Top</a>
  </div>
</nav>
    )
} 