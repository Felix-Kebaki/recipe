import React from 'react'
import './question.css'
import { QAndAnswer } from '../../constants/data'

export function Questions() {
  return (
    <section className='QuestionMainSec'>
        <div className='QuestionMainDiv'>
            <p id="QuestionsMainTittle">Frequently Asked Questions</p>
            <div>
                {QAndAnswer &&
                    QAndAnswer.map((question)=>(
                        <div key={question.id}>
                            <p>{question.question}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

