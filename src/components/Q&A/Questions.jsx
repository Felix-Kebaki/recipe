import React, { useState } from 'react'
import './question.css'
import { QAndAnswer } from '../../constants/data'

export function Questions() {

    const [selected,setSelected]=useState(null)

    const HandleSetSelected=(CurrentId)=>{
        setSelected(CurrentId===selected ? null: CurrentId)
    }
  return (
    <section className='QuestionMainSec'>
        <div className='QuestionMainDiv'>
            <p id="QuestionsMainTittle">Frequently Asked Questions</p>
            <div className='QuestionAndAnswerDivWrapper'>
                {QAndAnswer &&
                    QAndAnswer.map((question)=>(
                        <div key={question.id} className='QuestionAndAnswerDiv'>
                            <div onClick={()=>HandleSetSelected(question.id)} className='QuestionDiv'>
                            <p id="Question">{question.question}</p>
                            {selected===question.id?
                            <span id="SignsSpan">-</span>:
                            <span id="SignsSpan">+</span>}
                            </div>
                            {
                                selected===question.id?
                                <div className='AnswerDiv'>
                                    <p id="answer">{question.answer}</p>
                                </div>
                                :
                                null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

