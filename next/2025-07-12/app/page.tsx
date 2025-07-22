"use client"

import {useEffect, useState} from "react";
import api from "@/plugins/api";
import {setCookie} from "cookies-next";

export default function Home() {
  const [count, setCount] = useState<number>(0)

  // localStorage.setItem('access', '1234567890-765432sdfghress')
  setCookie('access', '1234567890', {
    expires: new Date('2025-10-10')
  })

  const getExams = async () => {
    try {
      const {data} = await api.get('/exams/')
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getExams()
  }, [])


  return (
    <>
      <h2>count: {count}</h2>
    </>
  );
}
