import CardDemo from './CardDemo'
import Navbar from '@/Pages/Navbar/Navbar'
export default function Shop() {
  return (
    <div>
        <Navbar/>
        <div className = "grid grid-cols-3 gap-4">
        <CardDemo title="Ram Lalla" price="8999"/>
        <CardDemo title="Ram Lalla" price="8999"/>
        <CardDemo title="Ram Lalla" price="8999"/>
        </div>
    </div>
  )
}
