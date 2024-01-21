import React ,{useRef,useState} from 'react'

const Quiz = () => {
  const percent=useRef();
  const email=useRef();
  const name=useRef();
  const id=useRef();
  const resData=[{"id":'20200103',"student":'A',"name":"Akash Kesharwani","email":"akashkesharwani81@gmail.com",'percent':'85%','marks':80,'time':"5 minutes"},
  {"id":'20200103',"student":'A',"name":"Akash Kesharwani","email":"akashkesharwani81@gmail.com",'percent':'85%','marks':80,'time':"5 minutes"},
  {"id":'20200103',"student":'A',"name":"Akash Kesharwani","email":"akashkesharwani81@gmail.com",'percent':'85%','marks':80,'time':"5 minutes"},
  {"id":'20200103',"student":'A',"name":"Akash Kesharwani","email":"akashkesharwani81@gmail.com",'percent':'85%','marks':80,'time':"5 minutes"}]
  const quiz1=[
    {"question":'who is the prime minister of India?','option1':'Rahul Gandhi','option2':'Amit Shah','option3':'Rajnath Singh','option4':'Narendra Modi','answer':4},
    {"question":'Who is the CEO of Google?','option1':'Akash Tripath','option2':'Sundar Pichai','option3':'Karan Malhotra','option4':'Darwwin Michael','answer':3},
    {"question":'What is the chemical formula of water?','option1':'H20','option2':'HCL','option3':'H2S04','option4':'MGHO4','answer':1},
    {"question":'What is the formula of Force?','option1':'F=ma','option2':'F=mc^2','option3':'F=mga','option4':'F=mvt','answer':1},
    {"question":'Who is the father of Nation?','option1':'Subhash Chandra Bose','option2':'Sardar Vallabh Patel','option3':'Mahatma Gandhi','option4':'Piyush Chawla','answer':3}
  ]
  const quiz2=[
    {"question":'What is the value of x is 5+5=X?','option1':'10','option2':'5','option3':'15','option4':'0','answer':1},
  {"question":'What is the value of 5*6*0?','option1':'0','option2':'30','option3':'300','option4':'560','answer':1},
  {"question":'What is the formula to find the area of square?','option1':'A=l*b','option2':'A=a*a','option3':'A=4*a','option4':'A=6*a*4','answer':2},
  {"question":'What is the formula to find the perimeter of rectange?','option1':'P=l+b','option2':'P=4*(l+b)','option3':'2*(l+b)','option4':'l+l','answer':3},
  {"question":'What is the are of rectange?','option1':'A=0.5*base*height','option2':'(1/4)*base*height','option3':'(1/6)*base*height','option4':'base*height','answer':1}
  ]
  const quiz3=[
    {"question":'who is the prime minister of India?','option1':'Rahul Gandhi','option2':'Amit Shah','option3':'Rajnath Singh','option4':'Narendra Modi','answer':4},
    {"question":'Who is the CEO of Google?','option1':'Akash Tripath','option2':'Sundar Pichai','option3':'Karan Malhotra','option4':'Darwwin Michael','answer':3},
    {"question":'What is the chemical formula of water?','option1':'H20','option2':'HCL','option3':'H2S04','option4':'MGHO4','answer':1},
    {"question":'What is the formula of Force?','option1':'F=ma','option2':'F=mc^2','option3':'F=mga','option4':'F=mvt','answer':1},
    {"question":'Who is the father of Nation?','option1':'Subhash Chandra Bose','option2':'Sardar Vallabh Patel','option3':'Mahatma Gandhi','option4':'Piyush Chawla','answer':3}
  ]
  const [studentData,setStudentData]=useState(null);
  const [leaderBoardData,setLeaderBoardData]=useState([]);
  const [subject,setSubject]=useState('physics');
  const [startQuizTime,setStartQuizTime]=useState(Date());
  const [currentQuiz,setCurrentQuiz]=useState([])
  const [answer,setAnswer]=useState(Array(5).fill(0));
  const startQuiz=()=>{
  let student='C';
  if(percent.current.value>80)
  {
    student='A';
    setCurrentQuiz(quiz1);
    setAnswer(Array(quiz1.length).fill(0));
  }else if(percent.current.value>60){
    student='B';
    setCurrentQuiz(quiz2);
    setAnswer(Array(quiz2.length).fill(0));
  }else{
    setCurrentQuiz(quiz3);
    setAnswer(Array(quiz3.length).fill(0));
  }
  const userData={"id":id.current.value,"name":name.current.value,"email":email.current.value,"percent":percent.current.value,"subject":subject,"student":student};
  setStudentData(userData);
  console.log(answer,'answer');
  setStartQuizTime(new Date().toLocaleTimeString());
  }
  const submitQuiz=()=>{
    console.log('submit studnet data',studentData)
    if(studentData.student=='A')
    {
        let marks=0;
        answer.map((item,index)=>{
            return(marks+=quiz1[index].answer==item?1:0)
            
        })
    studentData['marks']=marks;
    console.log(studentData,'studentdata');
    studentData['startTime']=startQuizTime;
    studentData['endTime']=new Date().toLocaleTimeString();
    setLeaderBoardData([...leaderBoardData,studentData]);
      
    }else if(studentData.student=='B')
    {
        let marks=0;
        answer.map((item,index)=>{
            marks+=quiz2[index].answer==item?1:0
        })
    studentData['marks']=marks;
    studentData['startTime']=startQuizTime;
    studentData['endTime']=new Date().toLocaleTimeString()
    setLeaderBoardData([...leaderBoardData,studentData]);
}else{
        let marks=0;
        answer.map((item,index)=>{
            marks+=quiz3[index].answer==item?1:0
        })
    studentData['marks']=marks;
    studentData['startTime']=startQuizTime;
    studentData['endTime']=new Date().toLocaleTimeString()
    setLeaderBoardData([...leaderBoardData,studentData]);
}
  }

  return (
    <>

    <div className='h-10 bg-blue-600'></div>
    {/* Detail Section */}
    <div className='shadow-lg rounded-lg m-5 p-4 border-2'>
        <div className='grid grid-cols-2'><div className='font-semibold'>Student 'A' Grade</div><div className='text-blue'>Marks must be greater than 80</div></div>
        <div className='grid grid-cols-2'><div className='font-semibold'>Student 'B' Grade</div><div className='text-blue'>Marks must be greater than 60</div></div>
        <div className='grid grid-cols-2'><div className='font-semibold'>Student 'C' Grade</div><div className='text-blue'>Marks must be greater than 40</div></div>
    </div>
    <div className='flex flex-col border-2 m-5 p-4 rounded-lg gap-2'>
    <div className='text-xl font-bold ml-2'>Id</div>
        <input type="text" ref={id} className='rounded-lg border-2 h-10 p-1' placeholder='Enter Your Id or RollNo'/>
        <div className='text-xl font-bold ml-2'>Name</div>
        <input type="text" ref={name} className='rounded-lg border-2 h-10 p-1' placeholder='Enter Your Name'/>
        <div className='text-xl font-bold ml-2'>Email</div>
        <input type="email" ref={email} className='rounded-lg border-2 h-10 p-1' placeholder='Enter Your Email'/>
        <div className='text-xl font-bold ml-2'>Percent</div>
        <input type="number" ref={percent} className='rounded-lg border-2 h-10 p-1' placeholder='Enter Your 10th Percent'/>
       
        <div className='bg-blue-700 text-white rounded-xl w-36 shadow-lg text-xl text-center justify-center cursor-pointer' onClick={startQuiz}>Start Quiz</div>
    </div>

    {/* Quiz Section */}
    <div className='border-2 m-5 shadow-lg rounded-lg p-4 border-t-4 border-b-4 border-black'>
        <div className='text-xl font-semibold'>Quiz</div>
        <div className='border-b-2 grid-cols-4'>
        <div className=''>Name:{studentData?.name}</div>
        <div className=''>Email:{studentData?.email}</div>
        <div className=''>Student:{studentData?.student}</div>
        <div className=''>Percent:{studentData?.percent}</div>
        <div className=''>Id:{studentData?.id}</div>   
        <div className='0'>Timer:{startQuizTime}</div>     
        </div>
        <div className='m-5'>
        {
            currentQuiz.map((item,index)=>{
                return(
                    <div className='shadow-lg m-2 border-2 rounded-lg flex flex-col p-2'>
                        <div className='font-semibold text-xl'><span className='text-xl font-bold'>{index+1}.</span>{item.question}</div>
                        <div className='grid grid-cols-2'>
                            <div className=''><input type="checkbox" checked={answer[index]==1} onChange={()=>{const ans=[...answer];ans[index]=1;setAnswer(ans);}}/>{item.option1}</div>
                            <div className=''><input type="checkbox" checked={answer[index]==2} onChange={()=>{const ans=[...answer];ans[index]=2;setAnswer(ans);}}/>{item.option2}</div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className=''><input type="checkbox" checked={answer[index]==3} onChange={()=>{const ans=[...answer];ans[index]=3;setAnswer(ans);}}/>{item.option3}</div>
                            <div className=''><input type="checkbox" checked={answer[index]==4} onChange={()=>{const ans=[...answer];ans[index]=4;setAnswer(ans);}}/>{item.option4}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className='bg-blue-600 text-white text-center justify-center rounded-lg cursor-pointer h-10 text-xl' onClick={()=>{submitQuiz();}}>Submit Quiz</div>

    </div>
    {/* Leader Board Section */}
    <div className=' font-bold text-center justify-center font-serif'>LeaderBoard</div>
    <div className='text-xl '>
        <div className='grid grid-cols-8 border-2 p-2 text-center'>
        <div className='font-semibold text-l'>Id</div>
        <div className='font-semibold text-l'>Student</div>
        <div className='font-semibold text-l'>Name</div>
        <div className='font-semibold text-l'>Email</div>
        <div className='font-semibold text-l'>Percent</div>
        <div className='font-semibold text-l'>Marks</div>
        <div className='font-semibold text-l'>startQuizTime</div>
        <div className='font-semibold text-l'>endQuizTime</div>
        </div>
        {
          leaderBoardData.map((item,key)=>{
            return(
                <div className='grid grid-cols-8 border-2 p-2 text-center'>
        <div className='text-sm'>{item.id}</div>
        <div className='text-sm'>{item.student}</div>
        <div className='text-sm'>{item.name}</div>
        <div className='text-sm'>{item.email}</div>
        <div className='text-sm'>{item.percent}</div>
        <div className='text-sm'>{item.marks}</div>
        <div className='text-sm'>{item.startTime}</div>
        <div className='text-sm'>{item.endTime}</div>
        </div>  
            )
          })
        }

    </div>
    <div className='mt-10 bg-blue-600 h-10'></div>
    </>
  )
}

export default Quiz