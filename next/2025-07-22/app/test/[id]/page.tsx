'use client'
import {useParams} from "next/navigation";
import {useActionQueue} from "next/dist/client/components/use-action-queue";

export default function () {
  const params = useParams()

  return (
    <span>child</span>
  )
}