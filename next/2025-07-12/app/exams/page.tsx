'use client'

import api from "@/plugins/api";
import {useEffect, useState} from "react";

export default function () {
  const [exams, setExams] = useState([])

  const getExams = async () => {
    try {
      const {data} = await api.get('/exams/')
      setExams(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getExams()
  }, [])

  return (
    <>
      <ul>
        {
          exams.map((exam) => {
            return <li key={exam.id}>{exam.title}</li>
          })
        }
      </ul>
    </>
  )
}