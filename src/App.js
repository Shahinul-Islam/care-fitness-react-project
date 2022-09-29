import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';
import Person from './components/Person/Person';

function App() {
  
    const [exerciseData, setExerciseData] = useState([]);
    useEffect(()=>{
      fetch('exercise.json').then(res=>res.json()).then(data=>setExerciseData(data))
    },[])
    // console.log(exerciseData)
    let [updatedTime, setTime] = useState(0)

    const activitiesTime=(time)=>{
      updatedTime=updatedTime+time;
      setTime(updatedTime)
    }

    
  
  return (
    <div className="App p-4 bg-amber-200">
      <main className='grid lg:grid-cols-3'>
        <div className='col-span-2'>
          <nav className='lg:text-left p-4'>
          <a ><img className='inline' src={logo}></img></a><span className='font-bold'>Care Fitness</span>
          <p className='mt-6'>Select today’s exercise</p>
          </nav>
          <div className='grid md:grid-cols-3 gap-3 my-3'>
            {
              exerciseData.map(singleData=><ExerciseCard key={singleData.id} data={singleData} activitiesTime={activitiesTime}></ExerciseCard>)
            }
            
          </div>
        </div>
        <div>
          <Person updatedTime={updatedTime}></Person>
        </div>
      </main>
    </div>
  );
}

export default App;
