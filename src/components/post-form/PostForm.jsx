import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { MyButton, MyInput, RTC, SelectInput } from '../index'
import { useNavigate } from 'react-router-dom'

function PostForm({post}) {
    
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues : {
            title : post?.title || "",
            slug : post?.slug || "",
            content : post?.content || "",
            status : post?.status || 1
        }
    })
    
    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const formSubmit = async(data) => {
        console.log(data);
        
        if(post) {
            console.log(data);
            // appwrite api call for put
        }else {
            // appwrite api for post
            console.log(data);

        }
        

    }
    const slugTransform = useCallback((value)=> {

        if(value && typeof value === "string") return value.trim()
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+|-+$/g, '')

        return ""
    }, [])

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === "title") {
                setValue("slug", slugTransform(value.title), {
                    shouldValidate: true
                })
            }
        })

        return () => {
            subscription.unsubscribe()
        }

    }, [watch, slugTransform])


  return (
    <div>PostForm</div>
  )
}

export default PostForm