import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';

function App() {
  
    const [exerciseData, setExerciseData] = useState([]);
    useEffect(()=>{
      fetch('exercise.json').then(res=>res.json()).then(data=>setExerciseData(data))
    },[])
    console.log(exerciseData)
  
  return (
    <div className="App">
      <main className='grid grid-cols-3'>
        <div className='col-span-2'>
          <nav className='text-left p-4'>
          <a ><img className='inline' src={logo}></img></a><span className='font-bold'>Care Fitness</span>
          <p className='mt-6'>Select today’s exercise</p>
          </nav>
          <div className='grid grid-cols-3 gap-3'>
            {
              exerciseData.map(singleData=><ExerciseCard key={singleData.id} data={singleData}></ExerciseCard>)
            }
            
          </div>
        </div>
        <div >
          thsi is for person
        </div>
      </main>
    </div>
  );
}

export default App;
